const game = new SimonGame();

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("buttonBox").style.display = "grid";
    game.startGame();
});

document.getElementById("sound-example1").addEventListener("click", () => {
    game.playPurpleSound()
})
document.getElementById("sound-example2").addEventListener("click", () => {
    game.playOrangeSound()
})
document.getElementById("sound-example3").addEventListener("click", () => {
    game.playPinkSound()
})
document.getElementById("sound-example4").addEventListener("click", () => {
    game.playSilverSound()
})