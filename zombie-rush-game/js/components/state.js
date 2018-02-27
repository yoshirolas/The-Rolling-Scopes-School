import { Player } from "./player";
import { Brain } from "./brain";
import { Lava } from "./lava";

export const state = {
  maxStep: 0.05,
  wobbleSpeed: 8,
  wobbleDist: 0.07,
  playerXSpeed: 10,
  gravity: 30,
  jumpSpeed: 17,
  scale: 40,
  fps: 30,
  objPositionX: 34,   //objects shift in canvas
  objPositionY: 130,  //objects shift in canvas
  meltStep: 0,
  breathInc: 0.1,
  breathMax: 1,
  maxEyeHeight: 10,
  timeBtwBlinks: 4000,
  blinkUpdateTime: 200,
  intervalBlink: null,
  intervalBreath: null,
  intervalMelt: null,
  turnLeft: null,
  jumpingStatus: null,
  breathDir: 1,
  breathAmt: 0,
  curEyeHeight: 10,
  eyeOpenTime: 0,
  totalResources: 14,
  brainsEaten: 0,
  memorybrainsEaten: 0,
  numResourcesLoaded: 0,
  canvasPlayer: null,
  contextPlayer: null,
  playerLost: null,
  images: {},
  actorChars: {
    "@": Player,
    "o": Brain,
    "=": Lava,
    "|": Lava,
    "v": Lava
  },
};