class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.row0 = [null, null, null];
        this.row1 = [null, null, null];
        this.row2 = [null, null, null];
        this.turn = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex === 0 && this.row0[columnIndex] === null) {
            this.row0[columnIndex] = this.currentPlayerSymbol;
            this.turn++;
            this.getWinner();
            if (this.currentPlayerSymbol === 'x') {
                this.currentPlayerSymbol = 'o';
            }
            else if (this.currentPlayerSymbol === 'o') {
                this.currentPlayerSymbol = 'x';
            }
        }
        else if (rowIndex === 1 && this.row1[columnIndex] === null) {
            this.row1[columnIndex] = this.currentPlayerSymbol;
            this.turn++;
            this.getWinner();
            if (this.currentPlayerSymbol === 'x') {
                this.currentPlayerSymbol = 'o';
            }
            else if (this.currentPlayerSymbol === 'o') {
                this.currentPlayerSymbol = 'x';
            }
        }
        else if (rowIndex === 2 && this.row2[columnIndex] === null) {
            this.row2[columnIndex] = this.currentPlayerSymbol;
            this.turn++;
            this.getWinner();
            if (this.currentPlayerSymbol === 'x') {
                this.currentPlayerSymbol = 'o';
            }
            else if (this.currentPlayerSymbol === 'o') {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.turn === 9 || this.winner !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        if (this.row0[0] === this.row0[1] && this.row0[1] === this.row0[2] && this.row0[0]!== null) {this.winner = this.row0[0];}
        if (this.row1[0] === this.row1[1] && this.row1[1] === this.row1[2] && this.row1[0]!== null) {this.winner = this.row1[0];}
        if (this.row2[0] === this.row2[1] && this.row2[1] === this.row2[2] && this.row2[0]!== null) {this.winner = this.row2[0];}
        if (this.row0[0] === this.row1[0] && this.row1[0] === this.row2[0] && this.row0[0]!== null) {this.winner = this.row0[0];}
        if (this.row0[1] === this.row1[1] && this.row1[1] === this.row2[1] && this.row0[1]!== null) {this.winner = this.row0[1];}
        if (this.row0[2] === this.row1[2] && this.row1[2] === this.row2[2] && this.row0[2]!== null) {this.winner = this.row0[2];}
        if (this.row0[0] === this.row1[1] && this.row1[1] === this.row2[2] && this.row0[0]!== null) {this.winner = this.row0[0];}
        if (this.row0[2] === this.row1[1] && this.row1[1] === this.row2[0] && this.row0[2]!== null) {this.winner = this.row0[2];}
        return this.winner;
    }

    noMoreTurns() {
        if (this.turn === 9) {
            return true;
        }
        else {
            return false;
        }
    }

    isDraw() {
        if (this.turn === 9 && this.winner === null) {
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex === 0) {
            return this.row0[colIndex];
        } 
        else if (rowIndex === 1){
            return this.row1[colIndex];
        }
        else if (rowIndex === 2){
            return this.row2[colIndex];
        }
    }
}

module.exports = TicTacToe;
