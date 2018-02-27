import { state } from "./state";

export class PopUp {
  constructor() {
    this.bodyElement = document.getElementsByTagName('body')[0];
    this.losePopUpElement = document.getElementById('lose-popup-container-id');
    this.winPopUpElement = document.getElementById('win-popup-container-id');
    this.loseScoreElement = document.getElementById('lose-popup-score');
    this.winScoreElement = document.getElementById('win-popup-score');
    this.buttonRestartLevel = document.getElementById('restart-level-button-id');
    this.buttonRestartGame = document.getElementById('restart-game-button-id');
  }

  showLosePopUp() {
    const showingLosePopUp = () => {
      this.losePopUpElement.classList.add("show-popup");
    };
    setTimeout(showingLosePopUp, 500);

    if (this.bodyElement) this.bodyElement.style.cursor = 'auto';
    this.loseScoreElement.innerHTML = state.brainsEaten;

    this.buttonRestartLevel.addEventListener('click', this.hideLosePopUp);
  }

  showWinPopUp() {
    const showingWinPopUp = () => {
      this.winPopUpElement.classList.add("show-popup");
    };
    setTimeout(showingWinPopUp, 500);

    if (this.bodyElement) this.bodyElement.style.cursor = 'auto';
    this.winScoreElement.innerHTML = state.brainsEaten;

    this.buttonRestartGame.addEventListener('click', this.hideWinPopUp);
  }

  hideLosePopUp() {
    const losePopUpElement = document.getElementById('lose-popup-container-id');
    const bodyElement = document.getElementsByTagName('body')[0];

    losePopUpElement.classList.remove("show-popup");
    if (bodyElement) bodyElement.style.cursor = 'none';
  }

  hideWinPopUp() {
    const winPopUpElement = document.getElementById('win-popup-container-id');
    const bodyElement = document.getElementsByTagName('body')[0];

    winPopUpElement.classList.remove("show-popup");
    if (bodyElement) bodyElement.style.cursor = 'none';
  }
}