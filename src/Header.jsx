import './Header.css'

function Header() {
    return (
        <>
            <header>
                <section className="profile">
                    <a href="index.html"><img className="profile-pic" src="src/assets/images/eduardlupu.jpg" alt="Eduard Lupu"/></a>
                    <h1 id="name">Eduard Adrian Lupu</h1>
                    <p id="small-description"></p>
                </section>
                <section className="about_me">
                    <p>Final year student of Computer Science @ <a href="https://www.cs.ubbcluj.ro/en/" target="_blank">Babes-Bolyai
                        University</a></p>
                    <p>Software Developer Intern @ <a href="https://bitstone.com/" target="_blank">BitStone</a>, previously
                        @
                        <a href="https://www.bitdefender.com/" target="_blank">BitDefender</a></p>
                    <p>Feel free to contact me for any collaborations!</p>
                    <section className="socials">
                        <a className="link" data-title="facebook.com/eduard.adrian.lupu"
                           href="https://www.facebook.com/eduard.adrian.lupu"
                           target="_blank"><i
                            className="fab fa-facebook-square share"></i></a>
                        <a className="link" data-title="instagram.com/edi.lupu" href="https://www.instagram.com/edi.lupu/"
                           target="_blank">
                            <i className="fab fa-instagram-square share"></i></a>
                        <a className="link" data-title="github.com/EduardLupu" href="https://github.com/EduardLupu"
                           target="_blank"><i
                            className="fab fa-github-square"></i></a>
                        <a className="link" data-title="linkedin.com/in/eduard-lupu"
                           href="https://www.linkedin.com/in/eduard-lupu/"
                           target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a className="link" data-title="lupu.eduard.adrian@gmail.com"
                           href="mailto:lupu.eduard.adrian@gmail.com"
                           target="_blank"><i className="fas fa-envelope-square"></i></a>
                        <a className="link" data-title="Check out my Spotify profile!"
                           href="https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont?si=839ad136064948df"
                           target="_blank"><i className="fab fa-spotify"></i></a>
                    </section>
                </section>
                <script src={"src/assets/js/header.js"}></script>
            </header>
        </>
    )
}

export default Header;
