
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