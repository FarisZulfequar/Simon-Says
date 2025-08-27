
class SimonGame {
    //region Field Variables
    static colorList = ["purple", "orange", "pink", "silver"];
    static colorIDToKey = { "purpleBtn" : "purple",
        "orangeBtn" : "orange",
        "pinkBtn" : "pink",
        "silverBtn" : "silver",
        "sound-example1" : "purple",
        "sound-example2" : "orange",
        "sound-example3" : "pink",
        "sound-example4" : "silver",
        "orange" : "orange",
        "pink" : "pink",
        "silver" : "silver",
        "purple" : "purple",
    }
    static colorMapSound = { "purple" : new Audio("sound/sound1.mp3"),
        "orange" : new Audio("sound/sound2.mp3"),
        "pink" : new Audio("sound/sound3.mp3"),
        "silver" : new Audio("sound/sound4.mp3")
    }
    static currentColorIndex = 0;
    #colorSequence;
    #crtLevel;
    #highestLevel;
    #playerSequence;
    //endregion

    //region Constructor
    constructor() {
        this.#colorSequence = [];
        this.#crtLevel = 0;
        this.#highestLevel = 0;
        this.#playerSequence = [];
    }
    //endregion

    //region Methods
    gameRules() {
        alert("Step 1: The game plays a sequence of colored buttons using sound\n\n" +
            "Step 2: The player listens carefully and remembers the order of the colors/sounds\n\n" +
            "Step 3: The player clicks the colored buttons in the exact same order as shown.\n\n" +
            "Step 4: If the player correctly enters the sequence, adds one more color/sound and shows the new pattern\n\n" +
            "Step 5: The game ends if the player clicks the wrong colored")
    }

    addColorToSequence() {
        // Retrieve a random number from 0 to 3
        let randomColor = Math.floor(Math.random() * 4);

        // Add the color to the sequence based on the number from the colorList index
        this.#colorSequence.push(SimonGame.colorList[randomColor]);
    }

    PlayColoredSound(colorBtnID) {
        // first retrieve the color ID from the button
        const soundID = SimonGame.colorIDToKey[colorBtnID];

        // retrieve the correct audio from the color
        const colorSound = SimonGame.colorMapSound[soundID];

        // play the audio
        colorSound.volume = 0.5;
        colorSound.play();

    }

    async showSequence() {
        // Go through the colorSequence and play the corresponding sound and change the currentColor string
        for (let colorIndex = 0; colorIndex < this.#colorSequence.length; colorIndex++) {
            await this.timeDelay(100000);
            this.PlayColoredSound([this.#colorSequence[colorIndex]])
            document.getElementById("currentColor").innerText = this.#colorSequence[colorIndex].toUpperCase()
        }
         await this.timeDelay(100000);
         document.getElementById("currentColor").innerText = ""
        this.toggleButton(false);
    }

    nextRound() {
        this.addColorToSequence()
        this.showSequence()
    }

    checkPlayerInput(buttonID) {
        // Check the colored button the user clicked on
        const userColorChoice = SimonGame.colorIDToKey[buttonID];
        this.PlayColoredSound((userColorChoice))

        // Checks if user's color matches with the current color order
        if (userColorChoice === this.#colorSequence[SimonGame.currentColorIndex]) {
            SimonGame.currentColorIndex++;

            // Moves onto the next round, increases the levels and disables the use of the buttons temporarily
            if (SimonGame.currentColorIndex === this.#colorSequence.length) {
                SimonGame.currentColorIndex = 0;
                this.#crtLevel++;
                this.#highestLevel++;
                document.getElementById("lblCrtScore").innerText = `Current Level: ${this.#crtLevel}`;
                document.getElementById("lblHighestScore").innerText = `Highest Level: ${this.#highestLevel}`;
                this.toggleButton(true);
                this.nextRound();
            }
        }
        // Otherwise shows a game over screen
        else {
            this.#crtLevel = 0;
            document.getElementById("lblCrtScore").innerText = `Current Level: ${this.#crtLevel}`;
            this.toggleButton(true);
            this.gameOver();
        }
    }

    gameOver() {
    }

    resetGame() {

    }

    timeDelay() {
        return new Promise(function(resolve) {
            setTimeout(function () {
                resolve();
            }, 1000)
        });
    }

    toggleButton(toggle) {
        const buttons = document.getElementsByClassName("color-btn");
        for (let number = 0; number < buttons.length; number++) {
            buttons[number].disabled = toggle;
        }
    }
    //endregion



}
