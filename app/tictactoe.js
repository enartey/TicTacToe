/*
	File that creates the array used by the game to
	determine locate and notify the user when there is
	a winner
*/

var index, board, proto;


/* creates two dimensional game board of any size using a nested array */
function makeBoard(){
	board = Object.create(proto);
	return board;
}


proto = {
	initialize: function(boardSize){
		var arr = [], index1, index2;
		while (index1 < boardSize){
			index2 = 0;
			arr[ index1 ] = [];
			while (index2 < boardSize){
				arr[ index1 ][ index2 ] = null;
				index2 += 1;
			}
			index1 += 1;
		}
		return arr;
	},

	checkDL: function(i, j, p){
		if (this[ i - 1 ][ j - 1 ] === p){
			return true;
		}
		return false;
	},

	checkDR: function(i, j, p){
		if (this[ i - 1 ][ j + 1 ] === p){
			return true;
		}
		return false;
	},

	checkUR: function(i, j, p){
		if (this[ i + 1 ][ j + 1 ] === p){
			return true;
		}
		return false;
	},

	checkUL: function(i, j, p){
		if (this[ i + 1 ][ j - 1 ] === p){
			return true;
		}
		return false;
	},

	checkL: function(i, j, p){
		if (this[ i - 1 ][ j ] === p){
			return true;
		}
		return false;
	},

	checkR: function(i, j, p){
		if (this[ i + 1 ][ j ] === p){
			return true;
		}
		return false;
	},

	checkD: function(i, j, p){
		if (this[ i ][ j - 1 ] === p){
			return true;
		}
		return false;
	},

	checkU: function(i, j, p){
		if (this[ i ][ j + 1 ] === p){
			return true;
		}
		return false;
	},


};
