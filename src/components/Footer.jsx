import '../assets/styles/Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";


function Footer() {

    return (
        <>
            <footer>
                <p>Check out my <a href="../assets/Lupu_Eduard.pdf" target="_blank">résumé!</a></p>
                <br/>
                    <p>Eduard Adrian Lupu © 2023</p>
                    <a href="#header" id="top" title="Go to top">
                        <FontAwesomeIcon icon={faArrowCircleUp} id="go-to-top"/>
                    </a>
            </footer>
        </>
    )
}

export default Footer;