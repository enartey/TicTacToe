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
	Accepts the required board size from the user and
	uses it to create the board
*/
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

	bounds: function(i, j){
		//returns true if i or j are out of bounds
		return(((i || j) < 0) || ((i || j) > this.boardSize)); 
	},

	checkDL: function(i, j){
		return this.arr[ i - 1 ][ j - 1 ] === this.turn;
	},

	checkDR: function(i, j){
		return this.arr[ i - 1 ][ j + 1 ] === this.turn;
	},

	checkUR: function(i, j){
		return this.arr[ i + 1 ][ j + 1 ] === this.turn;
	},

	checkUL: function(i, j){
		return this.arr[ i + 1 ][ j - 1 ] === this.turn;
	},

	checkL: function(i, j){
		return this.arr[ i - 1 ][ j ] === this.turn;
	},

	checkR: function(i, j){
		return this.arr[ i + 1 ][ j ] === this.turn;
	},

	checkD: function(i, j){
		return this.arr[ i ][ j - 1 ] === this.turn;
	},

	checkU: function(i, j){
		return this.arr[ i ][ j + 1 ] === this.turn;
	},

	winner: function(){
		// code to end/reset the game
	},

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

	endTurn: function(i, j){
		this.turn = (this.turn + 1) % 2;
	}


};
