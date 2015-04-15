var board, expect, ticTacToe, chai, 
	a1 = [[0,0,0],[0,0,0],[0,0,0]],
	a2 = [[1,1,1],[1,1,1],[1,1,1]],
	a3 = [[0,0,0],[1,1,1],[0,1,0]],
	a3 = [[1,1,1],[0,0,0],[1,0,1]],
	emptyBoard = [[-1, -1, -1],[-1, -1, -1],[-1, -1, -1]];

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

	it("creates -1 array", function(){
		expect(board.arr).to.deep.equal(emptyBoard);
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

describe("Individual Check Functions:", function(){
	board = ticTacToe.new();

	/*should check for:
	- out of bounds
	- blank [use emptyArr]
	- 0 (O) [use a1]
	- 1 (X) [use a2]
	*/
	describe("All checks on empty space", function(){
		board.arr = emptyBoard;
		it("checkDL() #4", function(){
			expect(board.checkDL(1,1)).to.equal(false);
		});
		it("checkDR() #5", function(){
			expect(board.checkDR(1,1)).to.equal(false);
		});
		it("checkL() #6", function(){
			expect(board.checkL(1,1)).to.equal(false);
		});
		it("checkR() #7", function(){
			expect(board.checkR(1,1)).to.equal(false);
		});
		it("checkD() #8", function(){
			expect(board.checkD(1,1)).to.equal(false);
		});
		it("checkU() #9", function(){
			expect(board.checkU(1,1)).to.equal(false);
		});
		it("checkUR() #10", function(){
			expect(board.checkUR(1,1)).to.equal(false);
		});
		it("checkUL() #11", function(){
			expect(board.checkUL(1,1)).to.equal(false);
		});
	});

	describe("All checks on 0 space", function(){
		board.arr = a1;
		board.turn = 0;
		it("checkDL() #4", function(){
			expect(board.checkDL(1,1)).to.equal(true);
		});
		it("checkDR() #5", function(){
			expect(board.checkDR(1,1)).to.equal(true);
		});
		it("checkL() #6", function(){
			expect(board.checkL(1,1)).to.equal(true);
		});
		it("checkR() #7", function(){
			expect(board.checkR(1,1)).to.equal(true);
		});
		it("checkD() #8", function(){
			expect(board.checkD(1,1)).to.equal(true);
		});
		it("checkU() #9", function(){
			expect(board.checkU(1,1)).to.equal(true);
		});
		it("checkUR() #10", function(){
			expect(board.checkUR(1,1)).to.equal(true);
		});
		it("checkUL() #11", function(){
			expect(board.checkUL(1,1)).to.equal(true);
		});
	});

	/*describe("All checks on 1 space", function(){
		board.arr = a2;
		it("checkDL() #4", function(){
			expect(board.checkDL(1,1)).to.equal(false);
		});
		it("checkDR() #5", function(){
			expect(board.checkDR(1,1)).to.equal(false);
		});
		it("checkL() #6", function(){
			expect(board.checkL(1,1)).to.equal(false);
		});
		it("checkR() #7", function(){
			expect(board.checkR(1,1)).to.equal(false);
		});
		it("checkD() #8", function(){
			expect(board.checkD(1,1)).to.equal(false);
		});
		it("checkU() #9", function(){
			expect(board.checkU(1,1)).to.equal(false);
		});
		it("checkUR() #10", function(){
			expect(board.checkUR(1,1)).to.equal(false);
		});
		it("checkUL() #11", function(){
			expect(board.checkUL(1,1)).to.equal(false);
		});
	});

	describe("All checks on out of bounds space", function(){
		board.arr = a3;
		it("checkDL() #4", function(){
			expect(board.checkDL(1,1)).to.equal(false);
		});
		it("checkDR() #5", function(){
			expect(board.checkDR(1,1)).to.equal(false);
		});
		it("checkL() #6", function(){
			expect(board.checkL(1,1)).to.equal(false);
		});
		it("checkR() #7", function(){
			expect(board.checkR(1,1)).to.equal(false);
		});
		it("checkD() #8", function(){
			expect(board.checkD(1,1)).to.equal(false);
		});
		it("checkU() #9", function(){
			expect(board.checkU(1,1)).to.equal(false);
		});
		it("checkUR() #10", function(){
			expect(board.checkUR(1,1)).to.equal(false);
		});
		it("checkUL() #11", function(){
			expect(board.checkUL(1,1)).to.equal(false);
		});
	});
	*/
});