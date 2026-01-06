function reveal() {
    // Show the surprise
    document.getElementById("surprise").style.display = "block";

    // Play music
    const music = document.getElementById("bgMusic");
    music.play();

    // Optional: create hearts if you have that function
    if (typeof createHearts === "function") createHearts();
}
function revealAndPlay() {
    // Show the surprise
    const surprise = document.getElementById("surprise");
    surprise.style.display = "block";

    // Play music
    const music = document.getElementById("bgMusic");
    music.volume = 0.5; // safe volume
    const playPromise = music.play();

    // Handle any browser restrictions
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Music started successfully");
            })
            .catch((error) => {
                console.log("Music playback blocked, please click play manually", error);
                alert("Tap the Play button to hear your music! 🎵");
            });
    }

    // Optional: hearts animation
    if (typeof createHearts === "function") createHearts();
}


function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}
