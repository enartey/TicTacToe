var board;

expect = require("./chai.js").expect;

ticTacToe = require("./model.js");


describe("constructor", function(){
	"use strict";
	beforeEach(function(){
		board = ticTacToe.new();
	})

	it("test", function(){
		expect(false).to.equal(false);
	});
	});