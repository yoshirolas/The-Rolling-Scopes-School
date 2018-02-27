import { Game } from "./components/game";
import { state } from "./components/state";
import { LEVELS } from "./components/levels";
import { DOMDisplay } from "./components/domDisplay";

const startButton = document.getElementsByClassName('start-button')[0];

startButton.onclick = () => {
  const welcomeScreen = document.getElementsByClassName('intro')[0];
  if (welcomeScreen) welcomeScreen.style.display = 'none';
  
  const bodyElement = document.getElementsByTagName('body')[0];
  if (bodyElement) bodyElement.style.cursor = 'none';

  new Game(LEVELS, DOMDisplay);
};

const defaultJumpSpeed = 17;
const defaultPlayerXSpeed = 10;
const defaultPlayerLostStatus = null;

const restartGameButton = document.getElementById('restart-game-button-id');

restartGameButton.onclick = () => {
  new Game(LEVELS, DOMDisplay);
  state.brainsEaten = 0;
  state.memorybrainsEaten = 0;
  state.jumpSpeed = defaultJumpSpeed;
  state.playerXSpeed = defaultPlayerXSpeed;
  state.playerLost = defaultPlayerLostStatus;
};