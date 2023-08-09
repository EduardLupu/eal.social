import '../styles/MainContent.css';
import createPlayingItem, {createTopArtists, createTopTracks} from "../middleware/api.js";
import {useEffect, useState} from "react";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GoogleMapsIframe from "./Map.jsx";

function MainContent() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [albumImageUrl, setAlbumImageUrl] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [explicit, setExplicit] = useState(false);
    const [items, setItems] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [isPlaying, title, explicit, artist, albumImageUrl, songUrl] = await createPlayingItem();
                setIsPlaying(isPlaying);
                setTitle(title);
                setExplicit(explicit);
                setArtist(artist);
                setAlbumImageUrl(albumImageUrl);
                setSongUrl(songUrl);

            } catch (error) {
                console.error('Error fetching now playing item:', error);
            }
        }

        async function fetchTopTracks() {
            try {
                const items = await createTopTracks();
                setItems(items);
            } catch (error) {
                console.error('Error fetching top tracks:', error);
            }
        }

        async function fetchArtists() {
            try {
                const artists = await createTopArtists();
                setArtists(artists);
            } catch (error) {
                console.error('Error fetching artists:', error);
            }
        }

        fetchData();
        fetchTopTracks();
        fetchArtists();

        return () => {
            // Cleanup

            setIsPlaying(false);
            setTitle('');
            setExplicit(false);
            setArtist('');
            setAlbumImageUrl('');
            setSongUrl('');
            setItems([]);
            setArtists([]);
        }

    }, []);

    useEffect(() => {
        function handleAnimateSpans() {
            const animateSpans = document.querySelectorAll('.animate');
            animateSpans.forEach(span => {
                span.classList.remove('animate');
                let parent = span.parentNode;
                if (parent.tagName === 'A')
                    parent = parent.parentNode;
                if (parent.offsetWidth < span.offsetWidth)
                    span.classList.add('animate');
            });
        }

        // Call the handleAnimateSpans function whenever the component updates or the window is resized
        handleAnimateSpans();
        window.addEventListener('resize', handleAnimateSpans);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleAnimateSpans);
        };
    });

    return (
        <>
            <hr/>
            <main>
                <section className="skills">
                    <h2>Comfortable working with</h2>
                    <div className="wrapper">
                        <a className="link" data-title="C++" href="https://en.cppreference.com/w/cpp" target="_blank" aria-label="Link to C++ website" rel="noreferrer">
                            <i className="devicon-cplusplus-plain colored"></i>
                        </a>
                        <a className="link" data-title="Python" href="https://www.python.org/" target="_blank" aria-label="Link to Python website" rel="noreferrer">
                            <i className="devicon-python-plain colored"></i>
                        </a>
                        <a className="link" data-title="PHP" href="https://www.php.net/" target="_blank" aria-label="Link to PHP website" rel="noreferrer">
                            <i className="devicon-php-plain colored"></i>
                        </a>
                        <a className="link" data-title="Java" href="https://docs.oracle.com/en/java/" target="_blank" aria-label="Link to Java website" rel="noreferrer">
                            <i className="devicon-java-plain colored"></i>
                        </a>
                        <a className="link" data-title="Spring" href="https://spring.io/" target="_blank" aria-label="Link to Spring website" rel="noreferrer">
                            <i className="devicon-spring-plain-wordmark colored"></i>
                        </a>
                        <a className="link" data-title="HTML5"
                           href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" aria-label="Link to HTML5 website" rel="noreferrer">
                            <i className="devicon-html5-plain colored"></i>
                        </a>
                        <a className="link" data-title="CSS3" href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                           target="_blank" aria-label="Link to CSS3 website" rel="noreferrer">
                            <i className="devicon-css3-plain colored"></i>
                        </a>
                        <a className="link" data-title="JavaScript"
                           href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" aria-label="Link to JS website" rel="noreferrer">
                            <i className="devicon-javascript-plain colored"></i>
                        </a>
                        <a className="link" data-title="TypeScript" href="https://www.typescriptlang.org/"
                           target="_blank" aria-label="Link to TS website" rel="noreferrer">
                            <i className="devicon-typescript-plain colored"></i>
                        </a>
                        <a className="link" data-title="React" href="https://reactjs.org/" target="_blank" aria-label="Link to React website" rel="noreferrer">
                            <i className="devicon-react-original colored"></i>
                        </a>
                        <a className="link" data-title="MySQL" href="https://dev.mysql.com/" target="_blank" aria-label="Link to MySQL website" rel="noreferrer">
                            <i className="devicon-mysql-plain colored"></i>
                        </a>
                        <a className="link" data-title="Git" href="https://git-scm.com/" target="_blank" aria-label="Link to Git website" rel="noreferrer">
                            <i className="devicon-git-plain colored"></i>
                        </a>
                        <a className="link" data-title="TortoiseGit" href="https://tortoisegit.org/" target="_blank" aria-label="Link to TortoiseGit website" rel="noreferrer">
                            <i className="devicon-tortoisegit-plain colored"></i>
                        </a>
                        <a className="link" data-title="Linux" href="https://www.linux.org/" target="_blank" aria-label="Link to Linux website" rel="noreferrer">
                            <i className="devicon-linux-plain colored"></i>
                        </a>
                        <a className="link" data-title="Ubuntu" href="https://ubuntu.com/" target="_blank" aria-label="Link to Ubuntu website" rel="noreferrer">
                            <i className="devicon-ubuntu-plain colored"></i>
                        </a>
                        <a className="link" data-title="IntelliJ" href="https://www.jetbrains.com/idea/"
                           target="_blank" aria-label="Link to IntelliJ website" rel="noreferrer">
                            <i className="devicon-intellij-plain colored"></i>
                        </a>
                        <a className="link" data-title="Visual Studio" href="https://visualstudio.microsoft.com/"
                           target="_blank" aria-label="Link to Visual Studio website" rel="noreferrer">
                            <i className="devicon-visualstudio-plain colored"></i>
                        </a>
                        <a className="link" data-title="PyCharm" href="https://www.jetbrains.com/pycharm/"
                           target="_blank" aria-label="Link to PyCharm website" rel="noreferrer">
                            <i className="devicon-pycharm-plain colored"></i>
                        </a>

                    </div>
                </section>

                <section className="projects">
                    <h2>Some of my projects</h2>
                    <div className="wrapper">
                        <section className="project">
                            <h3><a href="https://github.com/EduardLupu/tourism-rest-api" target="_blank" rel="noreferrer">Tourism RESTful
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
                            <h3><a href="https://github.com/EduardLupu/social-platform" target="_blank" rel="noreferrer">Social
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
                            <h3><a href="https://github.com/EduardLupu/gomoku" target="_blank" rel="noreferrer">Gomoku</a></h3>
                            <p>Created a Gomoku game using <strong>Pygame</strong> and <strong>Numpy</strong>. </p>
                            <p>The player has the option to choose between a graphical
                                user interface or a console based interface and also between a competitive AI or a AI
                                based
                                on
                                randomness.</p>
                        </section>
                        <section className="project">
                            <h3><a href="https://github.com/EduardLupu/Shop">Shop</a></h3>
                            <p>Web application built with <strong>React</strong> and <strong>JavaScript</strong>.
                                Allows user to do any actions that they would do in an online shop.</p>
                            <p>Used <strong>dummyjson.com</strong> to fetch products and an internal API made at the office to do functionalities which required <strong>POST</strong> methods. </p>
                            <p>Also implemented this in vanilla JavaScript, take a look <strong><a
                                href="https://github.com/EduardLupu/vanilla-javascript-shop/tree/eduard"
                                target="_blank" rel="noreferrer">here!</a></strong></p>
                        </section>
                    </div>
                </section>
                <h2>Music data I fetched using Spotify API</h2>
                <section className="music">
                    <div className="music-wrapper">
                        <div className="now-playing">
                            {
                                isPlaying ?
                                    <div className="spotify-container">
                                        <div className="playing-animation">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="now-playing">
                                            <div className="spotify-container">
                                                <img id="song-cover" src={albumImageUrl} alt="Song cover" loading="lazy"/>
                                                <div className="song-details">
                                                    <h3 id="song-title"><a href={songUrl} target="_blank" rel="noreferrer"><span
                                                        className="animate">{title}</span></a></h3>
                                                    {explicit ?
                                                        <div className="explicit">
                                                            <h4 id="song-explicit">E</h4>
                                                            <h4 id="song-artist">
                                                                <span className="animate">{artist}</span>
                                                            </h4>
                                                        </div>
                                                        :
                                                        <h4 id="song-artist"><span className="animate">{artist}</span>
                                                        </h4>}
                                                </div>
                                                <div className="spotify-logo">
                                                    <FontAwesomeIcon icon={faSpotify}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="not-playing">
                                        <div className="spotify-logo">
                                            <FontAwesomeIcon icon={faSpotify}/>
                                        </div>
                                        <h3>Currently not playing any song on Spotify!</h3>
                                    </div>
                            }
                        </div>
                        <div className="top10artists">
                            <h4>Top 20 artists this month</h4>
                            {
                                artists.map((artist, index) => {
                                    return (
                                        <div className="artist" key={index}>
                                            <p id="index">{index + 1}</p>
                                            <img src={artist.images[0].url} alt="Artist cover" loading="lazy"/>
                                            <div className="song-details">
                                                <p id="name">{artist.name}</p>
                                                <p id="popularity">Popularity: {artist.popularity}%</p>
                                            </div>
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className="top20songs">
                        <h4>Top 20 songs this month</h4>
                            {
                                items.map((item, index) => {
                                    return (
                                        <div className="song" key={index}>
                                            <p id="index">{index + 1}</p>
                                            <img src={item.album.images[0].url} alt="Song cover" loading="lazy"/>
                                            <div className="song-details">
                                                <p id="title">{item.name}</p>
                                                <p id="artist">{item.artists.map((_artist) => _artist.name).join(", ")}</p>
                                            </div>
                                        </div>)
                                })
                            }
                    </div>
                </section>
                <h2>Where you can find me</h2>
                <section className="location">
                    <GoogleMapsIframe/>
                </section>
            </main>
        </>)
}

export default MainContent;