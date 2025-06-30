
class SimonGame {
    //region Field Variables
    #colorList;
    #colorSequence;
    #crtLevel;
    #playerSequence;
    //endregion

    //region Constructor
    constructor() {
        // This is where you initialize all field variables
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
    //endregion

    //region Methods
    startGame() {

    }

    nextRound() {

    }

    checkPlayerSequence() {

    }

    gameOver() {

    }

    resetGame() {

    }
    //endregion



}