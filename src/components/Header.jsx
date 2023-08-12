import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {useEffect} from "react";
import Typewriter from "./Typewriter.jsx";
import profile from '../assets/profile.webp'

function Header() {

    useEffect(() => {

        const handleResize = () => {
            const myName = document.getElementById("name");
            if (window.innerWidth <= 600) {
                myName.innerHTML = "Eduard A. Lupu";
            } else {
                myName.innerHTML = "Eduard Adrian Lupu";
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    });

    return (
        <>
            <header id="header">
                <section className="profile">
                    <a className="link" data-title="Yes, this is me!" href="#" aria-label="Just a picture with me.">
                        <img className="profile-pic" src={profile} alt="Eduard Lupu"/></a>
                    <h1 id="name">
                        {
                            window.innerWidth <= 600 ? "Eduard A. Lupu" : "Eduard Adrian Lupu"
                        }
                    </h1>
                    <Typewriter />
                </section>
                <section className="about_me">
                    <p>Computer Science student @ <a className="link" href="https://www.cs.ubbcluj.ro/en/" target="_blank" data-title="Check out my faculty!" rel="noreferrer">Babes-Bolyai
                        University</a></p>
                    <p>Software Developer Intern @ <a className="link" href="https://bitstone.com/" target="_blank" data-title="Check out my workplace!" rel="noreferrer">BitStone</a>, previously
                        @ <a className="link" href="https://www.bitdefender.com/" target="_blank" data-title="bitdefender.com" rel="noreferrer">BitDefender</a></p>
                    <p>Feel free to contact me for any collaborations!</p>
                    <section className="socials">
                        <a className="link" data-title="facebook.com/eduard.adrian.lupu" href="https://www.facebook.com/eduard.adrian.lupu" target="_blank" aria-label="Link to my Facebook" rel="noreferrer">
                            <FontAwesomeIcon className="socials-icon" icon={faFacebookSquare} />
                        </a>
                        <a className="link" data-title="instagram.com/edi.lupu" href="https://www.instagram.com/edi.lupu/" target="_blank" aria-label="Link to my Instagram" rel="noreferrer">
                            <FontAwesomeIcon className="socials-icon" icon={faInstagramSquare} />
                        </a>
                        <a className="link" data-title="github.com/EduardLupu" href="https://github.com/EduardLupu" target="_blank" aria-label="Link to my Github" rel="noreferrer">
                            <FontAwesomeIcon className="socials-icon" icon={faGithubSquare} />
                        </a>
                        <a className="link" data-title="linkedin.com/in/eduard-lupu" href="https://www.linkedin.com/in/eduard-lupu/" target="_blank" aria-label="Link to my linkedIn" rel="noreferrer">
                            <FontAwesomeIcon className="socials-icon" icon={faLinkedin} />
                        </a>
                        <a className="link" data-title="lupu.eduard.adrian@gmail.com" href="mailto:lupu.eduard.adrian@gmail.com" target="_blank" aria-label="Link to my mail" rel="noreferrer">
                            <FontAwesomeIcon className="socials-icon" icon={faEnvelopeSquare} />
                        </a>
                        <a className="link" data-title="Check out my Spotify profile!" href="https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont?si=839ad136064948df" target="_blank" aria-label="Link to my Spotify" rel="noreferrer">
                            <FontAwesomeIcon className="socials-icon" style={{fontSize: "2.75rem"}} icon={faSpotify} />
                        </a>
                    </section>
                </section>
            </header>
        </>
    )
}

export default Header;
