var board, expect, ticTacToe, chai, 
	a0 = [[0,0,0],[0,0,0],[0,0,0]],
	a1 = [[1,1,1],[1,1,1],[1,1,1]],
	a3 = [[0,0,0],[1,1,0],[0,1,0]],
	a4 = [[1,0,1],[0,1,0],[1,0,0]],
	emptyBoard = [[-1, -1, -1],[-1, -1, -1],[-1, -1, -1]];

chai = require('./chai.js');
expect = chai.expect;
ticTacToe = require('./model.js');

describe("Constructor", function(){
	"use strict";
	beforeEach(function(){
		board = ticTacToe.new();
	})

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

	it("isOutOfBounds() #20", function(){
		expect(board.isOutOfBounds(-1, -1)).to.equal(true);
		expect(board.isOutOfBounds(-10, -10)).to.equal(true);
		expect(board.isOutOfBounds(-10, 1)).to.equal(true);
		expect(board.isOutOfBounds(2, -10)).to.equal(true);
		expect(board.isOutOfBounds(1, 2)).to.equal(false);
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

	it("Winner() #15", function(){
		expect(board.win).to.equal(0);
		board.winner();
		expect(board.win).to.equal(1);
	})

	it("endTurn() #18", function(){
		expect(board.turn).to.equal(0);
		board.endTurn();
		expect(board.turn).to.equal(1);
		board.endTurn();
		expect(board.turn).to.equal(0);
		board.endTurn();
		expect(board.turn).to.equal(1);
		board.endTurn();
		expect(board.turn).to.equal(0);
	})

	it("checkDiag() #12", function(){
		board.arr = a0;
		board.turn = 0;
		expect(board.checkDiag(0,0)).to.equal(true);
		expect(board.checkDiag(0,1)).to.equal(false);
		expect(board.checkDiag(0,2)).to.equal(true);
		expect(board.checkDiag(1,0)).to.equal(false);
		expect(board.checkDiag(1,1)).to.equal(true);
		expect(board.checkDiag(1,2)).to.equal(false);
		expect(board.checkDiag(2,0)).to.equal(true);
		expect(board.checkDiag(2,1)).to.equal(false);
		expect(board.checkDiag(2,2)).to.equal(true);

		board.arr = a4;
		board.turn = 1
		expect(board.checkDiag(0,0)).to.equal(false);
		expect(board.checkDiag(0,1)).to.equal(false);
		expect(board.checkDiag(0,2)).to.equal(true);
		expect(board.checkDiag(1,0)).to.equal(false);
		expect(board.checkDiag(1,1)).to.equal(true);
		expect(board.checkDiag(1,2)).to.equal(false);
		expect(board.checkDiag(2,0)).to.equal(true);
		expect(board.checkDiag(2,1)).to.equal(false);
	})

	it("checkRow() #13", function(){
		board.arr = a3;
		board.turn = 0;
		expect(board.checkRow(0,0)).to.equal(false);
		expect(board.checkRow(0,1)).to.equal(false);
		expect(board.checkRow(0,2)).to.equal(true);
		expect(board.checkRow(1,0)).to.equal(true);
		expect(board.checkRow(1,1)).to.equal(false);
		expect(board.checkRow(1,2)).to.equal(true);
		expect(board.checkRow(2,0)).to.equal(false);
		expect(board.checkRow(2,1)).to.equal(false);
		expect(board.checkRow(2,2)).to.equal(true);

		board.arr = a4;
		expect(board.checkRow(0,0)).to.equal(false);
		expect(board.checkRow(0,1)).to.equal(false);
		expect(board.checkRow(1,0)).to.equal(false);
		expect(board.checkRow(1,1)).to.equal(true);
		expect(board.checkRow(1,2)).to.equal(false);
		expect(board.checkRow(2,0)).to.equal(false);
		expect(board.checkRow(2,1)).to.equal(false);
		expect(board.checkRow(2,2)).to.equal(false);

		board.arr = a0;
		expect(board.checkRow(0,0)).to.equal(true);
		expect(board.checkRow(0,1)).to.equal(true);
		expect(board.checkRow(0,2)).to.equal(true);
		expect(board.checkRow(1,0)).to.equal(true);
		expect(board.checkRow(1,1)).to.equal(true);
		expect(board.checkRow(1,2)).to.equal(true);
		expect(board.checkRow(2,0)).to.equal(true);
		expect(board.checkRow(2,1)).to.equal(true);
		expect(board.checkRow(2,2)).to.equal(true);

		board.turn = 1;
		expect(board.checkRow(0,0)).to.equal(false);
		expect(board.checkRow(0,1)).to.equal(false);
		expect(board.checkRow(0,2)).to.equal(false);
		expect(board.checkRow(1,0)).to.equal(false);
		expect(board.checkRow(1,1)).to.equal(false);
		expect(board.checkRow(1,2)).to.equal(false);
		expect(board.checkRow(2,0)).to.equal(false);
		expect(board.checkRow(2,1)).to.equal(false);
		expect(board.checkRow(2,2)).to.equal(false);

	})

	it("checkColumn() #14", function(){
		board.arr = a3;
		board.turn = 0;
		expect(board.checkColumn(0,0)).to.equal(true);
		expect(board.checkColumn(0,1)).to.equal(true);
		expect(board.checkColumn(0,2)).to.equal(true);
		expect(board.checkColumn(1,0)).to.equal(false);
		expect(board.checkColumn(1,1)).to.equal(false);
		expect(board.checkColumn(1,2)).to.equal(false);
		expect(board.checkColumn(2,0)).to.equal(false);
		expect(board.checkColumn(2,1)).to.equal(true);
		expect(board.checkColumn(2,2)).to.equal(false);

		board.arr = a4;
		expect(board.checkColumn(0,0)).to.equal(false);
		expect(board.checkColumn(0,1)).to.equal(false);
		expect(board.checkColumn(0,2)).to.equal(false);
		expect(board.checkColumn(1,0)).to.equal(false);
		expect(board.checkColumn(1,1)).to.equal(true);
		expect(board.checkColumn(1,2)).to.equal(false);
		expect(board.checkColumn(2,0)).to.equal(true);
		expect(board.checkColumn(2,1)).to.equal(false);
		expect(board.checkColumn(2,2)).to.equal(false);

		board.arr = a0;
		expect(board.checkColumn(0,0)).to.equal(true);
		expect(board.checkColumn(0,1)).to.equal(true);
		expect(board.checkColumn(0,2)).to.equal(true);
		expect(board.checkColumn(1,0)).to.equal(true);
		expect(board.checkColumn(1,1)).to.equal(true);
		expect(board.checkColumn(1,2)).to.equal(true);
		expect(board.checkColumn(2,0)).to.equal(true);
		expect(board.checkColumn(2,1)).to.equal(true);
		expect(board.checkColumn(2,2)).to.equal(true);

		board.turn = 1
		expect(board.checkColumn(0,0)).to.equal(false);
		expect(board.checkColumn(0,1)).to.equal(false);
		expect(board.checkColumn(0,2)).to.equal(false);
		expect(board.checkColumn(1,0)).to.equal(false);
		expect(board.checkColumn(1,1)).to.equal(false);
		expect(board.checkColumn(1,2)).to.equal(false);
		expect(board.checkColumn(2,0)).to.equal(false);
		expect(board.checkColumn(2,1)).to.equal(false);
		expect(board.checkColumn(2,2)).to.equal(false);

	})

	it("checkLanes() #17", function(){

	})
});

describe("Individual Check Functions:", function(){
	"use strict";
	beforeEach(function(){
		board = ticTacToe.new();
	});

	/*should check for:
	- out of bounds
	- blank [use emptyArr]
	- 0 (O) [use a0]
	- 1 (X) [use a1]
	*/
	describe("Individual checks on empty space", function(){
		"use strict";
		beforeEach(function(){
			board = ticTacToe.new();
		});

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

	describe("Checks on 0 space, should be true", function(){
		"use strict";
		beforeEach(function(){
			board = ticTacToe.new();
			board.arr = a0;
		});

		//console.log("BEFORE", board.arr);
		it("checkDL() #4", function(){
			//console.log("AFTER", board.arr);
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

	describe("Checks on 0 space, should be false", function(){
		//set turn to 1, with board of 0, all should return false
		beforeEach(function(){
			board = ticTacToe.new();
			board.arr = a0;
			board.turn = 1;
		});

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

	describe("Checks on 1 space, should be true", function(){
		beforeEach(function(){
			board = ticTacToe.new();
			board.arr = a1;
			board.turn = 1;
		});

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

		//set as 0's turn (O)
	});
	describe("Checks on 1 space, should be false", function(){
		beforeEach(function(){
			board = ticTacToe.new();
			board.arr = a1;
			board.turn = 0;
		});
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
	
	describe("Individual checks on out of bounds space", function(){
		/*These should check that anything checked that would
		be out of bounds returns as false
		*/
		beforeEach(function(){
			board = ticTacToe.new();
			board.arr = a1;
			board.turn = 1;
		});

		it("checkDL() #4", function(){
			expect(board.checkDL(0,0)).to.equal(false);
		});
		it("checkDR() #5", function(){
			expect(board.checkDR(0,0)).to.equal(false);
		});
		it("checkL() #6", function(){
			expect(board.checkL(0,2)).to.equal(false);
		});
		it("checkR() #7", function(){
			expect(board.checkR(2,2)).to.equal(false);
		});
		it("checkD() #8", function(){
			expect(board.checkD(2,0)).to.equal(false);
		});
		it("checkU() #9", function(){
			expect(board.checkU(2,2)).to.equal(false);
		});
		it("checkUR() #10", function(){
			expect(board.checkUR(1,2)).to.equal(false);
		});
		it("checkUL() #11", function(){
			expect(board.checkUL(0,2)).to.equal(false);
		});
	});
	
});