const game = new SimonGame();

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("colorSoundTable").style.display = "none";
    document.getElementById("buttonBox").style.display = "grid";
    game.startGame();
});

document.querySelectorAll(".soundExamples").forEach(soundExanple => {
    soundExanple.addEventListener("click", () => {
        game.PlayColoredSound(soundExanple.id);
    })

})

document.getElementById("ruleBtn").addEventListener("click", () => {
    game.gameRules();
})

document.querySelectorAll(".color-btn").forEach(coloreBtn => {
    coloreBtn.addEventListener("click", () => {
        game.PlayColoredSound(coloreBtn.id);
    })
})