
class SimonGame {
    //region Field Variables
    #colorList;
    #colorSequence;
    #colorIDToKey;
    #colorMapSound;
    #crtLevel;
    #playerSequence;
    //endregion

    //region Constructor
    constructor() {
        this.#colorList = ["purple", "orange", "pink", "silver"];
        this.#colorIDToKey = { "purpleBtn" : "purple",
            "orangeBtn" : "orange",
            "pinkBtn" : "pink",
            "silverBtn" : "silver",
            "sound-example1" : "purple",
            "sound-example2" : "orange",
            "sound-example3" : "pink",
            "sound-example4" : "silver",
        }
        this.#colorMapSound = { "purple" : new Audio("sound/sound1.mp3"),
            "orange" : new Audio("sound/sound2.mp3"),
            "pink" : new Audio("sound/sound3.mp3"),
            "silver" : new Audio("sound/sound4.mp3")
        }
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
    get ColorIDToKey() {
        return this.#colorIDToKey;
    }
    get ColorMapSound() {
        return this.#colorMapSound;
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
        // TBD


        // let the player try to match the sequence


        // figure out if the player's sequence matches with simon's color sequence




    }

    gameRules() {
        alert("Step 1: The game plays a sequence of colored buttons using sound\n\n" +
            "Step 2: The player listens carefully and remembers the order of the colors/sounds\n\n" +
            "Step 3: The player clicks the colored buttons in the exact same order as shown.\n\n" +
            "Step 4: If the player correctly enters the sequence, adds one more color/sound and shows the new pattern\n\n" +
            "Step 5: The game ends if the player clicks the wrong colored")
    }

    addColorToSequence() {
        // Retrieve a random number from 0 to 3
        let randomColor = this.randomNumber;

        // Add the color to the sequence based on the number from the colorList index
        this.#colorSequence.push(this.#colorList[randomColor]);
    }

    PlayColoredSound(colorBtnID) {
        // first retrieve the color ID from the button
        const soundID = this.#colorIDToKey[colorBtnID];

        // retrieve the correct audio from the color
        const colorSound = this.#colorMapSound[soundID];

        // play the audio
        colorSound.volume = 0.5;
        colorSound.play();

    }

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