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
	} );
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
		this.turn = 0;
		this.boardSize = boardSize
		return arr;
	},

	checkDL: function(i, j, p){
		return (this.arr[ i - 1 ][ j - 1 ] === p){
	},

	checkDR: function(i, j, p){
		return (this.arr[ i - 1 ][ j + 1 ] === p){
	},

	checkUR: function(i, j, p){
		return (this.arr[ i + 1 ][ j + 1 ] === p){
	},

	checkUL: function(i, j, p){
		return (this.arr[ i + 1 ][ j - 1 ] === p){
	},

	checkL: function(i, j, p){
		return (this.arr[ i - 1 ][ j ] === p){
	},

	checkR: function(i, j, p){
		return (this.arr[ i + 1 ][ j ] === p){
	},

	checkD: function(i, j, p){
		return (this.arr[ i ][ j - 1 ] === p){
	},

	checkU: function(i, j, p){
		return (this.arr[ i ][ j + 1 ] === p){
	},

	winner: function(){
		// code to end/reset the game
	},

	checkDiag: function(i, j, p){
		var acc = 1;
		while (acc < boardSize){
			if (this.checkUL(i, j, p)){
				acc += 1;
			}
		}
	}

	checkRow: function(i, j){

	},

	checkColumn: function(i, j){

	},

	checkLanes: function(i, j){

	},

	endTurn: function(i, j){
		this.turn = (this.turn+1) % 2; 
	}


};
