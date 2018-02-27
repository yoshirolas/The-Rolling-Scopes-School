import { state } from "./state";

export class Character {
  constructor() {
    if (state.intervalBlink || state.intervalBreath || state.intervalMelt) {
      clearInterval(state.intervalBlink);
      clearInterval(state.intervalBreath);
      clearInterval(state.intervalMelt);
    }
    state.intervalBlink = setInterval(this.updateBlink, state.blinkUpdateTime);
    state.intervalBreath = setInterval(this.updateBreath, 1000 / state.fps);
    state.intervalMelt = setInterval(this.updateMelt, 1000 / state.fps);
  }

  redrawPlayer() {
    const playerTurnLeft = () => {
      state.contextPlayer.clearRect(
        0,
        0,
        state.canvasPlayer.width,
        state.canvasPlayer.height
      );
      state.contextPlayer.drawImage(
        state.images["torsoTurnLeft"],
        state.objPositionX - 18,
        state.objPositionY - 88
      );
      state.contextPlayer.drawImage(
        state.images["headTurnLeft"],
        state.objPositionX - 32,
        state.objPositionY - 128 - state.breathAmt
      );

      if (state.jumpingStatus) {
        state.contextPlayer.drawImage(
          state.images["legsTurnLeftJumping"],
          state.objPositionX - 35,
          state.objPositionY - 67
        );
        state.contextPlayer.drawImage(
          state.images["leftArmTurnLeft"],
          state.objPositionX - 35,
          state.objPositionY - 84 - state.breathAmt
        );
        state.contextPlayer.drawImage(
          state.images["rightArmTurnLeft"],
          state.objPositionX - 12,
          state.objPositionY - 84 - state.breathAmt
        );
      } else {

        /*Shadow*/
        drawEllipse(
          state.objPositionX - 9,
          state.objPositionY - 49,
          65 - (state.breathAmt * 3),
          6,
          "black"
        );
        state.contextPlayer.drawImage(
          state.images["legsTurnLeft"],
          state.objPositionX - 31,
          state.objPositionY - 65
        );
        state.contextPlayer.drawImage(
          state.images["leftArmTurnLeft"],
          state.objPositionX - 32,
          state.objPositionY - 84 - state.breathAmt
        );
        state.contextPlayer.drawImage(
          state.images["rightArmTurnLeft"],
          state.objPositionX - 15,
          state.objPositionY - 84 - state.breathAmt
        );
      }

      /*Right Eye*/
      drawEllipse(
        state.objPositionX - 22,
        state.objPositionY - 98 - state.breathAmt,
        5,
        state.curEyeHeight,
        "black"
      );

      /*Left Eye*/
      drawEllipse(
        state.objPositionX - 14,
        state.objPositionY - 98 - state.breathAmt,
        5,
        state.curEyeHeight,
        "black"
      );
    };

    const playerTurnRight = () => {
      state.contextPlayer.clearRect(
        0,
        0,
        state.canvasPlayer.width,
        state.canvasPlayer.height
      );
      state.contextPlayer.drawImage(
        state.images["torso"],
        state.objPositionX - 31,
        state.objPositionY - 88
      );
      state.contextPlayer.drawImage(
        state.images["head"],
        state.objPositionX - 32,
        state.objPositionY - 128 - state.breathAmt
      );

      if (state.jumpingStatus) {
        state.contextPlayer.drawImage(
          state.images["legsJumping"],
          state.objPositionX - 33,
          state.objPositionY - 67
        );
        state.contextPlayer.drawImage(
          state.images["leftArm"],
          state.objPositionX - 8,
          state.objPositionY - 84 - state.breathAmt
        );
        state.contextPlayer.drawImage(
          state.images["rightArm"],
          state.objPositionX - 34,
          state.objPositionY - 84 - state.breathAmt
        );
      } else {

        /*Shadow*/
        drawEllipse(
          state.objPositionX - 7,
          state.objPositionY - 49,
          65 - (state.breathAmt * 3),
          6,
          "black"
        );
        state.contextPlayer.drawImage(
          state.images["legs"],
          state.objPositionX - 31,
          state.objPositionY - 65
        );
        state.contextPlayer.drawImage(
          state.images["leftArm"],
          state.objPositionX - 10,
          state.objPositionY - 84 - state.breathAmt
        );
        state.contextPlayer.drawImage(
          state.images["rightArm"],
          state.objPositionX - 31,
          state.objPositionY - 84 - state.breathAmt
        );
      }

      /*Left Eye*/
      drawEllipse(
        state.objPositionX + 4,
        state.objPositionY - 98 - state.breathAmt,
        5,
        state.curEyeHeight,
        "black"
      );

      /*Right Eye*/
      drawEllipse(
        state.objPositionX - 4,
        state.objPositionY - 98 - state.breathAmt,
        5,
        state.curEyeHeight,
        "black"
      );
    };

    const playerTurnLeftLost = () => {
      state.contextPlayer.clearRect(
        0,
        0,
        state.canvasPlayer.width,
        state.canvasPlayer.height
      );
      state.contextPlayer.drawImage(
        state.images["torsoTurnLeft"],
        state.objPositionX - 18,
        state.objPositionY - 88 - state.meltStep
      );

      /*Blood*/
      drawEllipse(
        state.objPositionX - 9,
        state.objPositionY - 49 - state.meltStep,
        65 + state.meltStep,
        6,
        "red"
      );
      state.contextPlayer.drawImage(
        state.images["legsTurnLeft"],
        state.objPositionX - 31,
        state.objPositionY - 65 - state.meltStep
      );
      state.contextPlayer.drawImage(
        state.images["leftArmTurnLeft"],
        state.objPositionX - 32,
        state.objPositionY - 84 + state.meltStep / 2
      );
      state.contextPlayer.drawImage(
        state.images["rightArmTurnLeft"],
        state.objPositionX - 15,
        state.objPositionY - 84 + state.meltStep / 2
      );
      state.contextPlayer.drawImage(
        state.images["characterBrainTurnLeft"],
        state.objPositionX - 7 + state.meltStep / 4,
        state.objPositionY - 116 - state.meltStep / 4
      );
      state.contextPlayer.drawImage(
        state.images["headTurnLeft"],
        state.objPositionX - 32,
        state.objPositionY - 128 + state.meltStep
      );

      /*Right Eye*/
      drawEllipse(
        state.objPositionX - 22,
        state.objPositionY - 98 + state.meltStep,
        5,
        state.curEyeHeight,
        "red"
      );

      /*Left Eye*/
      drawEllipse(
        state.objPositionX - 14,
        state.objPositionY - 98 + state.meltStep,
        5 + state.meltStep / 2,
        state.curEyeHeight + state.meltStep / 2,
        "red"
      );
    };

    const playerTurnRightLost = () => {
      state.contextPlayer.clearRect(
        0,
        0,
        state.canvasPlayer.width,
        state.canvasPlayer.height
      );
      state.contextPlayer.drawImage(
        state.images["torso"],
        state.objPositionX - 31,
        state.objPositionY - 88 - state.meltStep
      );

      /*Blood*/
      drawEllipse(
        state.objPositionX - 7,
        state.objPositionY - 49 - state.meltStep,
        65 + state.meltStep,
        6,
        "red"
      );
      state.contextPlayer.drawImage(
        state.images["legs"],
        state.objPositionX - 31,
        state.objPositionY - 65 - state.meltStep
      );
      state.contextPlayer.drawImage(
        state.images["leftArm"],
        state.objPositionX - 10,
        state.objPositionY - 84 + state.meltStep / 2
      );
      state.contextPlayer.drawImage(
        state.images["rightArm"],
        state.objPositionX - 31,
        state.objPositionY - 84 + state.meltStep / 2
      );
      state.contextPlayer.drawImage(
        state.images["characterBrain"],
        state.objPositionX - 27 - state.meltStep / 4,
        state.objPositionY - 116 - state.meltStep / 4
      );
      state.contextPlayer.drawImage(
        state.images["head"],
        state.objPositionX - 32,
        state.objPositionY - 128 + state.meltStep
      );

      /*Left Eye*/
      drawEllipse(
        state.objPositionX + 4,
        state.objPositionY - 98 + state.meltStep,
        5,
        state.curEyeHeight,
        "red"
      );

      /*Right Eye*/
      drawEllipse(
        state.objPositionX - 4,
        state.objPositionY - 98 + state.meltStep,
        5 + state.meltStep / 2,
        state.curEyeHeight + state.meltStep / 2,
        "red"
      );
    };

    if (state.turnLeft) {
      if (state.playerLost) {
        playerTurnLeftLost();
      } else {
        playerTurnLeft();
      }
    } else {
      if (state.playerLost) {
        playerTurnRightLost();
      } else {
        playerTurnRight();
      }
    }
  }

  updateMelt() {
    const maxMelt = 10;
    if (state.playerLost && state.meltStep < maxMelt) {
      state.meltStep += 0.3;
    } else if (!state.playerLost) {
      state.meltStep = 0;
    }
  }

  updateBreath() {
    if (state.breathDir === 1) {
      state.breathAmt -= state.breathInc;
      if (state.breathAmt < -state.breathMax) {
        state.breathDir = -1;
      }
    } else {
      state.breathAmt += state.breathInc;
      if (state.breathAmt > state.breathMax) {
        state.breathDir = 1;
      }
    }
  }

  updateBlink() {
    const blink = () => {
      state.curEyeHeight -= 1;
      if (state.curEyeHeight <= 0) {
        state.eyeOpenTime = 0;
        state.curEyeHeight = state.maxEyeHeight;
      } else {
        setTimeout(blink, 10);
      }
    };

    state.eyeOpenTime += state.blinkUpdateTime;
    if (state.eyeOpenTime >= state.timeBtwBlinks) {
      blink();
    }
  }
}

const drawEllipse = (centerX, centerY, width, height, color) => {
  state.contextPlayer.beginPath();
  state.contextPlayer.moveTo(centerX, centerY - height / 2);
  state.contextPlayer.bezierCurveTo(
    centerX + width / 2, centerY - height / 2,
    centerX + width / 2, centerY + height / 2,
    centerX, centerY + height / 2);

  state.contextPlayer.bezierCurveTo(
    centerX - width / 2, centerY + height / 2,
    centerX - width / 2, centerY - height / 2,
    centerX, centerY - height / 2);

  state.contextPlayer.fillStyle = color;
  state.contextPlayer.fill();
  state.contextPlayer.closePath();
};