import '../styles/Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";


function Footer() {

    return (
        <>
            <footer>
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