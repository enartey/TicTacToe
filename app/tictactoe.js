/*
	File that creates the array used by the game to
	determine locate and notify the user when there is
	a winner
*/

var index, board, proto;


/* creates two dimensional game board of any size using a nested array */
function makeBoard(){
	board = Object.create(proto);
	board.initialize(size());
	return board;
}

/*
	for future implementation of multiple board sizes.


	Accepts the required board size from the user and
	uses it to create the board
	function size(){
	var prompt = require("prompt");

	// Start the prompt
	prompt.start();

	// Get board size from the user
	prompt.get([ "boardsize" ], function(result){
		console.log("boardsize: " + result.boardsize);
	});
	return result.boardsize;
}
*/

proto = {
	initialize: function(boardSize){
		var arr = [], i, j;
		while (i < boardSize){
			j = 0;
			arr[ i ] = [];
			while (j < boardSize){
				arr[ i ][ j ] = null;
				j += 1;
			}
			i += 1;
		}
		this.arr = arr;
		this.turn = 0;
		this.boardSize = boardSize;
		return this;
	},

	isOutOfBounds: function(i, j){
		//returns true if i or j are out of bounds
		return (i < 0) || (j < 0) || (i > this.boardsize) || (j > this.boardsize);
	},

	// checks the space to the bottom left of the space in question.
	checkDL: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i - 1 ][ j - 1 ] === this.turn;
	},

	// checks the space to the bottom right of the space in question.
	checkDR: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i - 1 ][ j + 1 ] === this.turn;
	},

	// checks the space to the top left of the space in question.
	checkUR: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i + 1 ][ j + 1 ] === this.turn;
	},

	// checks the space to the top left of the space in question.
	checkUL: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i + 1 ][ j - 1 ] === this.turn;
	},

	// checks the space directly to the left of the space in question.
	checkL: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i - 1 ][ j ] === this.turn;
	},

	// checks the space directly to the right of the space in question.
	checkR: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i + 1 ][ j ] === this.turn;
	},

	// checks the space directly below the space in question.
	checkD: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i ][ j - 1 ] === this.turn;
	},

	// checks the space directly above the space in question.
	checkU: function(i, j){
		if (this.isOutOfBounds(i, j)){
			return false;
		}
		return this.arr[ i ][ j + 1 ] === this.turn;
	},

	winner: function(){
		// code to end/reset the game
	},

	/*
		checks diagonally after a player plays to find out
		if there is a winner
	*/
	checkDiag: function(i, j){
		var acc = 1;
		while (acc < this.boardSize){
			if (this.checkUL(i, j)){
				acc += 1;
				if (this.checkUL(i - 1, j + 1)){
					acc += 1;
					this.winner();
				}
			}
			if (this.checkDR(i, j)){
				acc += 1;
				if (this.checkDR(i + 1, j - 1)){
					acc += 1;
					this.winner();
				}
			}
			if (this.checkUR(i, j)){
				acc += 1;
				if (this.checkUR(i + 1, j + 1)){
					acc += 1;
					this.winner();
				}
			}
			if (this.checkDL(i, j)){
				acc += 1;
				if (this.checkDL(i - 1, j - 1)){
					acc += 1;
					this.winner();
				}
			}
		}
	},

	/*
		checks a row after a players plays to
		find out if there is a winner
	*/
	checkRow: function(i, j){
		var acc = 1;
		while (acc < this.boardsize){
			if (this.checkL(i, j)){
				acc += 1;
				if (this.checkL(i - 1, j)){
					acc += 1;
					this.winner();
				}
			}
			if (this.checkR(i, j)){
				acc += 1;
				if (this.checkR(i + 1, j)){
					acc += 1;
					this.winner();
				}
			}
		}
	},

	/*
		checks a column after a player plays to
		find out if there is a winner
	*/
	checkColumn: function(i, j){
		var acc = 1;
		while (acc < this.boardsize){
			if (this.checkD(i, j)){
				acc += 1;
				if (this.checkD(i, j - 1)){
					acc += 1;
					this.winner();
				}
				if (this.checkU(i, j)){
					acc += 1;
					if (this.checkU(i, j + 1)){
						this.winner();
					}
				}
			}
		}
	},

	/* checks all possible configurations of winning
		per turn to see if there is a winner
	*/
	checkLanes: function(i, j){
		this.checkRow();
		this.checkColumn();
		this.checkDiag();
	},

	/*
		ends the turn of the user who just played
	*/
	endTurn: function(i, j){
		this.turn = (this.turn + 1) % 2;
	}
};
