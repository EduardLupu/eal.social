import '../assets/styles/MainContent.css';
import createPlayingItem, {createTopTracks} from "../assets/middleware/api.js";
import {useEffect, useState} from "react";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MainContent() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [albumImageUrl, setAlbumImageUrl] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [explicit, setExplicit] = useState(false);
    const [items, setItems] = useState([]);

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
                setItems(await createTopTracks());
            } catch (error) {
                console.error('Error fetching top tracks:', error);
            }
        }

        fetchData();
        fetchTopTracks();
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
                        <a className="link" data-title="C++" href="https://en.cppreference.com/w/cpp" target="_blank">
                            <i className="devicon-cplusplus-plain colored"></i>
                        </a>
                        <a className="link" data-title="Python" href="https://www.python.org/" target="_blank">
                            <i className="devicon-python-plain colored"></i>
                        </a>
                        <a className="link" data-title="PHP" href="https://www.php.net/" target="_blank">
                            <i className="devicon-php-plain colored"></i>
                        </a>
                        <a className="link" data-title="Java" href="https://docs.oracle.com/en/java/" target="_blank">
                            <i className="devicon-java-plain colored"></i>
                        </a>
                        <a className="link" data-title="Spring" href="https://spring.io/" target="_blank">
                            <i className="devicon-spring-plain-wordmark colored"></i>
                        </a>
                        <a className="link" data-title="HTML5"
                           href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                            <i className="devicon-html5-plain colored"></i>
                        </a>
                        <a className="link" data-title="CSS3" href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                           target="_blank">
                            <i className="devicon-css3-plain colored"></i>
                        </a>
                        <a className="link" data-title="JavaScript"
                           href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <i className="devicon-javascript-plain colored"></i>
                        </a>
                        <a className="link" data-title="TypeScript" href="https://www.typescriptlang.org/"
                           target="_blank">
                            <i className="devicon-typescript-plain colored"></i>
                        </a>
                        <a className="link" data-title="React" href="https://reactjs.org/" target="_blank">
                            <i className="devicon-react-original colored"></i>
                        </a>
                        <a className="link" data-title="MySQL" href="https://dev.mysql.com/" target="_blank">
                            <i className="devicon-mysql-plain colored"></i>
                        </a>
                        <a className="link" data-title="Git" href="https://git-scm.com/" target="_blank">
                            <i className="devicon-git-plain colored"></i>
                        </a>
                        <a className="link" data-title="TortoiseGit" href="https://tortoisegit.org/" target="_blank">
                            <i className="devicon-tortoisegit-plain colored"></i>
                        </a>
                        <a className="link" data-title="Linux" href="https://www.linux.org/" target="_blank">
                            <i className="devicon-linux-plain colored"></i>
                        </a>
                        <a className="link" data-title="Ubuntu" href="https://ubuntu.com/" target="_blank">
                            <i className="devicon-ubuntu-plain colored"></i>
                        </a>
                        <a className="link" data-title="IntelliJ" href="https://www.jetbrains.com/idea/"
                           target="_blank">
                            <i className="devicon-intellij-plain colored"></i>
                        </a>
                        <a className="link" data-title="Visual Studio" href="https://visualstudio.microsoft.com/"
                           target="_blank">
                            <i className="devicon-visualstudio-plain colored"></i>
                        </a>
                        <a className="link" data-title="PyCharm" href="https://www.jetbrains.com/pycharm/"
                           target="_blank">
                            <i className="devicon-pycharm-plain colored"></i>
                        </a>

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
                                            <img id="song-cover" src={albumImageUrl} alt="Song cover"/>
                                            <div className="song-details">
                                                <h3 id="song-title"><a href={songUrl} target="_blank"><span className="animate">{title}</span></a></h3>
                                                {explicit ?
                                                    <div className="explicit">
                                                        <h4 id="song-explicit">E</h4>
                                                        <h4 id="song-artist">
                                                        <span className="animate">{artist}</span>
                                                        </h4>
                                                    </div>
                                                    :
                                                    <h4 id="song-artist"><span className="animate">{artist}</span></h4>}
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
                    <div className="top20songs">


                    </div>
                </section>
                <section className="location">
                    <h2>Where you can find me</h2>

                </section>
            </main>
        </>)
}

export default MainContent;