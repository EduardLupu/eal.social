const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token
        })
    });

    return response.json();
};

const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};

const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};

async function getTopTracksItems() {
    const response = await getTopTracks();
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    return await response.json();
}

async function getNowPlayingItem() {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    return await response.json();
}

export default async function createPlayingItem() {
    const song = await getNowPlayingItem();
    const isPlaying = song.is_playing;

    if(isPlaying) {
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;
        const explicit = song.item.explicit;
        return [isPlaying, title, explicit, artist, albumImageUrl, songUrl];
    }
    return [isPlaying, "", "", "", ""];

}

export async function createTopTracks() {
    const tracks = await getTopTracksItems();
    return tracks.items;
}
