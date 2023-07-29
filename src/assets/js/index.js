let descriptions = [
    "Chess enthusiast.",
    "Swimmer and sauna lover.",
    "Mixed-martial arts addict.",
    "80's music listener.",
    "At least 4 espressos a day.",
    "Actually enjoying JavaScript. :)",
    "Clean code, clean mind.",
    "Music on full blast while coding.",
    "Skipping rope to stay in shape."
];

window.onload = function () {
    let smallDescription = document.getElementById("small-description");
    let description = descriptions[Math.floor(Math.random() * descriptions.length)];
    let i = 0;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function typeWriter() {
        let speed = Math.random() * (200 - 150) + 150;
        let variation = Math.random() * 0.5 + 0.5;

        if (i < description.length) {
            let typoChance = Math.random();
            if (typoChance > 0.92 && i > 0) {
                // 8% chance of a typo, where a random letter is added, which is not first letter.
                let randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase letter
                smallDescription.innerHTML += randomLetter; // Add the extra letter
                await sleep(Math.random() * 300 + 200); // Pause to simulate the realization
                smallDescription.innerHTML = smallDescription.innerHTML.slice(0, -1); // Delete the extra letter
                await sleep(Math.random() * 300 + 100); // Pause after correcting the typo
            } else {
                smallDescription.innerHTML += description.charAt(i);
                i++;
            }

            // Human-like pauses after a comma, period, or other punctuation marks
            let nextChar = description.charAt(i);
            let isPunctuation = /[,.!?;:]/.test(nextChar);
            let pauseTime = isPunctuation ? Math.random() * 600 + 400 : 0;

            // Introduce a pause when backspacing to simulate correcting mistakes
            let backspacePauseChance = Math.random();
            if (backspacePauseChance > 0.8) {
                pauseTime += Math.random() * 300 + 100;
            }

            let fastTypeChance = Math.random();
            if (fastTypeChance > 0.85) {
                speed *= 0.7; // 15% chance of faster typing
            }

            await sleep((speed * variation) + pauseTime);
            await typeWriter();
        }
    }
    typeWriter().then(r => {});
}

