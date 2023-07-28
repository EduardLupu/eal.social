let descriptions = [
    "Chess enthusiast.",
    "Swimmer and sauna lover.",
    "Mixed-martial arts addict.",
    "80's music listener.",
    "Aesthetics admirer."
];

window.onload = function () {
    let smallDescription = document.getElementById("small-description");
    let description = descriptions[Math.floor(Math.random() * descriptions.length)];
    let i = 0;
    let speed = 150;

    function typeWriter() {
        if (i < description.length) {
            smallDescription.innerHTML += description.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}
