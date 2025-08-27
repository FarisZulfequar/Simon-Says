
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
    //endregion

    //region Constructor
    constructor() {
        this.#colorSequence = [];
        this.#crtLevel = 0;
        this.#highestLevel = 0;

        // Stores the high score value locally
        const storedHigh = localStorage.getItem("highestScore");
        this.#highestLevel = storedHigh ? parseInt(storedHigh) : 0;
        document.getElementById("lblHighestScore").innerText = `Highest Level: ${this.#highestLevel}`;
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
            await this.timeDelay(700);

            this.PlayColoredSound([this.#colorSequence[colorIndex]])
            document.getElementById(`${this.#colorSequence[colorIndex]}Btn`).style.opacity = "1";
            await this.timeDelay(200);
            document.getElementById(`${this.#colorSequence[colorIndex]}Btn`).style.opacity = "0.7";
        }
        this.toggleButton(false);
    }

    nextRound() {
        this.addColorToSequence()
        this.showSequence()
    }

    async checkPlayerInput(buttonID) {
        // Check the colored button the user clicked on
        const userColorChoice = SimonGame.colorIDToKey[buttonID];
        document.getElementById(`${buttonID}`).style.opacity = '1';
        this.PlayColoredSound((userColorChoice))
        await this.timeDelay(100);
        document.getElementById(`${buttonID}`).style.opacity = '0.7';

        // Checks if user's color matches with the current color order
        if (userColorChoice === this.#colorSequence[SimonGame.currentColorIndex]) {
            SimonGame.currentColorIndex++;

            // Moves onto the next round, increases the levels and disables the use of the buttons temporarily
            if (SimonGame.currentColorIndex === this.#colorSequence.length) {
                SimonGame.currentColorIndex = 0;
                if (this.#crtLevel === this.#highestLevel) {
                    this.#highestLevel++;
                    localStorage.setItem("highestScore", this.#highestLevel);
                    document.getElementById("lblHighestScore").innerText = `Highest Level: ${this.#highestLevel}`;
                }
                this.#crtLevel++;
                document.getElementById("lblCrtScore").innerText = `Current Level: ${this.#crtLevel}`;
                this.toggleButton(true);
                this.nextRound();
            }
        }
        // Otherwise shows a game over screen
        else {
            this.gameOver();
        }
    }

    gameOver() {
        this.toggleButton(true)
        document.getElementById("ruleBtn").style.display = "none";
        document.getElementById("correctionLabel").style.display = "block";
        document.getElementById("retryButton").style.display = "block";
        document.getElementById("correctionLabel").innerText = `You Pressed the wrong Button! Correct Button : 
            ${this.#colorSequence[SimonGame.currentColorIndex]}`.toUpperCase();
    }

    resetGame() {
        this.#crtLevel = 0;
        this.#colorSequence.length = 0;
        document.getElementById("lblCrtScore").innerText = `Current Level: ${this.#crtLevel}`;
        document.getElementById("ruleBtn").style.display = "block";
        document.getElementById("correctionLabel").style.display = "none";
        document.getElementById("retryButton").style.display = "none";

        this.nextRound()
    }

    timeDelay(milliseconds) {
        return new Promise(function(resolve) {
            setTimeout(function () {
                resolve();
            }, milliseconds)
        });
    }

    toggleButton(toggle) {
        const buttons = document.getElementsByClassName("color-btn");
        for (let number = 0; number < buttons.length; number++) {
            buttons[number].disabled = toggle;
            buttons[number].style.opacity = "0.7";
        }
    }
    //endregion



}
