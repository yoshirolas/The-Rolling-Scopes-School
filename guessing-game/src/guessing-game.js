class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	//this.arr = [];
    	//for (var i = min; i <= max; i++) {
    	//	this.arr.push(i);
    	//}
    }

    guess() {
    	this.middle = Math.ceil((this.min + this.max) / 2);
    	return this.middle;
    	//this.middle = Math.floor(this.arr.length / 2);
    	//if (this.arr[this.middle] == this.number) {
    	//	return this.arr[this.middle];
    	//}
    	//return this.arr[this.middle];
    	//if (this.arr[middle] == number) {
    	//	return arr[middle];
    	//}
    	//else if (arr[middle] > number) {
    	//	greater();  
    	//}
    	//else if (arr[middle] < number) {
    	//	lower();
    	//}
    }

    lower() {
    	this.max = this.middle;
    	//this.min = this.arr[0];
    	//this.max = this.arr[this.middle];
    	//setRange(min, max);
    }

    greater() {
    	this.min = this.middle;
    	//this.min = this.arr[this.middle];
    	//this.max = this.arr[this.arr.length - 1];
		//setRange(min, max);
    }
}

module.exports = GuessingGame;
