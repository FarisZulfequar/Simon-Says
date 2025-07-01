
class SimonGame {
    //region Field Variables
    #colorList;
    #colorSequence;
    #crtLevel;
    #playerSequence;
    //endregion

    //region Constructor
    constructor() {
        this.#colorList = ["purple", "orange", "pink", "silver"];
        this.#colorSequence = [];
        this.#crtLevel = 0;
        this.#playerSequence = [];
    }
    //endregion

    //region Setters & Getters
    get ColorList() {
        return this.#colorList;
    }
    get ColorSequence() {
        return this.#colorSequence;
    }
    get CrtLevel() {
        return this.#crtLevel;
    }
    set CrtLevel(newLevel) {
        this.#crtLevel = newLevel;
    }
    get PlayerSequence() {
        return this.#playerSequence;
    }
    get randomNumber() {
        return Math.floor(Math.random() * 4);
    }
    //endregion

    //region Methods
    startGame() {
        document.getElementById("startButton").style.display = "none";
        document.getElementById("title").style.display = "none";
        document.getElementById("buttonBox").style.display = "grid";


        /*
        this.addColorToSequence()
        // play the color sequence with the matching sound
        this.#colorSequence.forEach((color) => {
            switch(color) {
                case "purple":
                    this.playPurpleSound();
                    break;
                case "orange":
                    this.playOrangeSound();
                    break;
                case "pink":
                    this.playPinkSound();
                    break;
                case "silver":
                    this.playSilverSound();
                    break;
            }
        })
         */


        // let the player try to match the sequence


        // figure out if the player's sequence matches with simon's color sequence




    }

    addColorToSequence() {
        // Retrieve a random number from 0 to 3
        let randomColor = this.randomNumber;

        // Add the color to the sequence based on the number from the colorList index
        this.#colorSequence.push(this.#colorList[randomColor]);
    }

    /*
    playPinkSound() {
        const pink = new Audio("sound/orange.mp3");
        pink.volume = 0.5;
        pink.play();
    }

    playOrangeSound() {
        const orange = new Audio("sound/orange.mp3");
        orange.volume = 0.5;
        orange.play();
    }

    playPurpleSound() {
        const purple = new Audio("sound/purple.mp3");
        purple.volume = 0.5;
        purple.play();
    }

    playSilverSound() {
        const silver = new Audio("sound/silver.mp3");
        silver.volume = 0.5;
        silver.play();
    }
    */

    showSequence() {

    }

    nextRound() {

    }

    checkPlayerInput() {

    }

    gameOver() {

    }

    resetGame() {

    }
    //endregion



}