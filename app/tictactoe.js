/*
	File that creates the array used by the game to 
	determine locate and notify the user when there is 
	a winner
*/

var index, boardSize, board, proto, i, j, p;


/* creates two dimensional game board of any size using a nested array */
function makeBoard (){
	var index1, index2, arr;
	board = Object.create(proto);
	return board;
}


proto = {
	
	initialize: function(boardSize){
		var arr = [];
		while (index1 < boardSize){
			index2 = 0;
			arr[index1] = [];
			while (index2 < boardSize){
				arr[index1][index2] = null;
				index2 += 1;
			}
			index1 += 1;
		}
		return arr;
	},

	checkDL: function(i, j, p){
		if(this[i-1][j-1] === p){
			return true;
		};
		else{
			return false;
		};
	},

	checkDR: function(i, j, p){
		if(this[i-1][j+1] === p){
			return true;
		};
		else{
			return false;
		};
	},

};
