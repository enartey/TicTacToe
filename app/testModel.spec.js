var board, expect, ticTacToe, chai, 
	a1 = [[0,0,0],[0,0,0],[0,0,0]],
	a2 = [[1,1,1],[1,1,1],[1,1,1]],
	a3 = [[0,0,0],[1,1,1],[0,1,0]],
	a3 = [[1,1,1],[0,0,0],[1,0,1]],
	nullArr = [[null, null, null],[null, null, null],[null, null, null]];

//expect = require("./chai.js").expect;
//ticTacToe = require("./model.js");

chai = require('./chai.js');
expect = chai.expect;
ticTacToe = require('./model.js');

describe("constructor", function(){
	"use strict";
	beforeEach(function(){
		board = ticTacToe.new();
	});

	it.skip("creates null array", function(){
		expect(board.arr).to.deep.equal(nullArr);
	});

	it("turn = 0, boardsize = 3, win = 0", function(){
		expect(board.turn).to.equal(0);
		expect(board.boardSize).to.equal(3);
		expect(board.win).to.equal(0);
	});
});

describe("Board Methods", function(){
	//i controls left/right axis
	//j controls up/down
	//(0,0) is bottom left spot on board
	"use strict";
	beforeEach(function(){
		board = ticTacToe.new();
	});

	it.skip("isOutOfBounds", function(){
		expect(board.isOutOfBounds(-1, -1)).to.equal(true);
		expect(board.isOutOfBounds(-10, -10)).to.equal(true);
		expect(board.isOutOfBounds(-10, 1)).to.equal(true);
		expect(board.isOutOfBounds(2, -10)).to.equal(true);
		expect(board.isOutOfBounds(1, 5)).to.equal(true);
		expect(board.isOutOfBounds(0, 23)).to.equal(true);
		expect(board.isOutOfBounds(4, 2)).to.equal(true);
		expect(board.isOutOfBounds(4, -1)).to.equal(true);
		expect(board.isOutOfBounds(5, 7)).to.equal(true);
		expect(board.isOutOfBounds(3, 3)).to.equal(true);
		expect(board.isOutOfBounds(0, 0)).to.equal(false);
		expect(board.isOutOfBounds(2, 1)).to.equal(false);
		expect(board.isOutOfBounds(1, 2)).to.equal(false);
	});
});

describe("Individual Check Functions", function(){
	beforeEach(function(){
		board = ticTacToe.new();
	});
	describe
	describe("Null Board", function(){
		it("Null Board", function(){
			board.arr = nullArr;
		});
		it("Full O Board", function(){
			//use a board full of O's [a1] and set to O's turn
			board.arr = a1;
			board.turn = 0;
			//out of bounds examples first
			expect(board.checkDL(0, 0)).to.equal(false);
			expect(board.checkDL(0, 1)).to.equal(false);
			expect(board.checkDL(0, 2)).to.equal(false);
			expect(board.checkDL(1, 0)).to.equal(false);
			expect(board.checkDL(2, 0)).to.equal(false);
			//now run in bounds examples
			expect(board.checkDL(1, 1)).to.equal(true);
			expect(board.checkDL(1, 2)).to.equal(true);
			expect(board.checkDL(2, 1)).to.equal(true);
			expect(board.checkDL(2, 2)).to.equal(true);
			//switch to board full of X's and make it X's turn
			board.arr = a2;
			board.turn = 1;
			//out of bounds examples first
			expect(board.checkDL(0, 0)).to.equal(false);
			expect(board.checkDL(0, 1)).to.equal(false);
			expect(board.checkDL(0, 2)).to.equal(false);
			expect(board.checkDL(1, 0)).to.equal(false);
			expect(board.checkDL(2, 0)).to.equal(false);
			//now run in bounds examples
			expect(board.checkDL(1, 1)).to.equal(true);
			expect(board.checkDL(1, 2)).to.equal(true);
			expect(board.checkDL(2, 1)).to.equal(true);
			expect(board.checkDL(2, 2)).to.equal(true);
			//switch to mixed board [a3] and X's turn
			board.arr = a3;
			board.turn = 1;
			expect(board.checkDL(1, 1)).to.equal(false);
			expect(board.checkDL(1, 2)).to.equal(false);
			expect(board.checkDL(2, 2)).to.equal(true);
		});
	});
});