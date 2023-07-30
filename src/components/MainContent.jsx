import '../assets/styles/MainContent.css';

function MainContent() {

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

    async function createPlayingItem() {
        const song = await getNowPlayingItem();
        console.log(song);
        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;

        if (isPlaying) {
            document.getElementById("song-title").innerHTML = `<a href="${songUrl}" target="_blank">${title}</a>`;
            document.getElementById("song-artist").innerHTML = artist;
            document.getElementById("song-cover").src = albumImageUrl;
        }
        else {
            const topTracks = await getTopTracksItems();
            const topTrack = topTracks.items[0];
            const topTrackAlbumImageUrl = topTrack.album.images[0].url;
            const topTrackArtist = topTrack.artists.map((_artist) => _artist.name).join(", ");
            const topTrackUrl = topTrack.external_urls.spotify;
            const topTrackTitle = topTrack.name;

            document.getElementById("song-title").innerHTML = `<a href="${topTrackUrl}" target="_blank">${topTrackTitle}</a>`;
            document.getElementById("song-artist").innerHTML = topTrackArtist;
            document.getElementById("song-cover").src = topTrackAlbumImageUrl;
        }
    }

    createPlayingItem();

    return (
        <>
            <hr/>
            <main>
                <section className="skills">
                    <h2>Comfortable working with</h2>
                    <div className="wrapper">
                        <a className="link" data-title="C++"><i className="devicon-cplusplus-plain colored"></i></a>
                        <a className="link" data-title="Python"><i className="devicon-python-plain colored"></i></a>
                        <a className="link" data-title="PHP"><i className="devicon-php-plain colored"></i></a>
                        <a className="link" data-title="Java"><i className="devicon-java-plain colored"></i></a>
                        <a className="link" data-title="Spring"><i
                            className="devicon-spring-plain-wordmark colored"></i></a>
                        <a className="link" data-title="HTML5"><i className="devicon-html5-plain colored"></i></a>
                        <a className="link" data-title="CSS3"><i className="devicon-css3-plain colored"></i></a>
                        <a className="link" data-title="JavaScript"><i className="devicon-javascript-plain colored"></i></a>
                        <a className="link" data-title="TypeScript"><i className="devicon-typescript-plain colored"></i></a>
                        <a className="link" data-title="React"><i className="devicon-react-original colored"></i></a>
                        <a className="link" data-title="MySQL"><i className="devicon-mysql-plain colored"></i></a>
                        <a className="link" data-title="Git"><i className="devicon-git-plain colored"></i></a>
                        <a className="link" data-title="TortoiseGit"><i
                            className="devicon-tortoisegit-plain colored"></i></a>
                        <a className="link" data-title="Linux"><i className="devicon-linux-plain colored"></i></a>
                        <a className="link" data-title="Ubuntu"><i className="devicon-ubuntu-plain colored"></i></a>
                        <a className="link" data-title="IntelliJ"><i className="devicon-intellij-plain colored"></i></a>
                        <a className="link" data-title="Visual Studio"><i
                            className="devicon-visualstudio-plain colored"></i></a>
                        <a className="link" data-title="PyCharm"><i className="devicon-pycharm-plain colored"></i></a>

                    </div>
                </section>

                <section className="projects">
                    <h2>Some of my projects</h2>
                    <div className="wrapper">
                        <section className="project">
                            <h3><a href="https://github.com/EduardLupu/tourism-rest-api" target="_blank">Tourism RESTful
                                API</a>
                            </h3>
                            <p>RESTful API built with <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Spring
                                Boot
                                MVC</strong>, <strong>Spring Data
                                JPA</strong>, <strong>Hibernate</strong>, <strong>MySQL</strong> and
                                developed using <strong>MVC Architecture</strong>, <strong>ORM</strong>, <strong>DTO
                                    Pattern</strong>,
                                custom exceptions, input validation, <strong>JUnit</strong> tests
                                with <strong>Mockito</strong>.</p>
                            <p>Built with <strong>React + Vite</strong> and <strong>TypeScript</strong>. Used multiple
                                components
                                from
                                MUI library.</p>
                        </section>
                        <section className="project">
                            <h3><a href="https://github.com/EduardLupu/social-platform" target="_blank">Social
                                Platform</a>
                            </h3>
                            <p>Created a GUI-based desktop application using <strong>C++</strong> and <strong>Qt
                                framework</strong> that
                                uses a local repository, based on
                                files, to simulate a Social Platform.</p>
                            <p>The application starts for every user in the repository, it shows
                                relevant posts based on the subscriptions of the user and allows users to post their
                                status.</p>
                        </section>
                        <section className="project">
                            <h3><a href="https://github.com/EduardLupu/gomoku" target="_blank">Gomoku</a></h3>
                            <p>Created a Gomoku game using <strong>Pygame</strong> and <strong>Numpy</strong>. </p>
                            <p>The player has the option to choose between a graphical
                                user interface or a console based interface and also between a competitive AI or a AI
                                based
                                on
                                randomness.</p>
                        </section>
                        <section className="project">
                            <h3><a href="https://github.com/EduardLupu/library-manager">Library Manager</a></h3>
                            <p>Application of a library (books, clients, rentals), built in <strong>Python</strong>.</p>
                            <p>The user can add, remove, update, and list both clients and books.</p>
                            <p>Unlimited undo/redo functionality (implemented using reverse operation)</p>
                            <p>The repository can be selected by the user (in-memory, files, binary-files, json,
                                sqlite).</p>
                        </section>
                    </div>
                </section>
                <section className="music">
                    <h2>Music I love</h2>
                       <div className="now-playing">
                           <div className="playing-animation">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <div className="spotify-logo">
                               <i className="fab fa-spotify"></i>
                           </div>
                           <img id="song-cover" src="" alt="Song cover"/>
                           <h3 id="song-title"></h3>
                           <h4 id="song-artist"></h4>
                       </div>
                </section>

                <section className="location">
                    <h2>Where you can find me</h2>

                </section>
            </main>
        </>)
}

export default MainContent;