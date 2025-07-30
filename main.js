const game = new SimonGame();

// Removes the main menu items and displays the in-game items
document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("colorSoundTable").style.display = "none";
    document.getElementById("buttonBox").style.display = "grid";
    document.getElementById("currentColor").style.display = "";
    document.getElementById("score-labels").style.display = "flex";
    document.getElementById("start-Menu").style.top = "50px";
    game.startGame();
});


// Plays the respective colored sound during main menu
document.querySelectorAll(".soundExamples").forEach(soundExanple => {
    soundExanple.addEventListener("click", () => {
        game.PlayColoredSound(soundExanple.id);
    })
})


document.getElementById("ruleBtn").addEventListener("click", () => {
    game.gameRules();
})

// Plays the respective colored sound during in-game
document.querySelectorAll(".color-btn").forEach(coloreBtn => {
    coloreBtn.addEventListener("click", () => {
        game.PlayColoredSound(coloreBtn.id);
    })
})