var board;

expect = require("./chai.js").expect;
		console.log("HEY");

ticTacToe = require("./model.js");

/*try {
   var chai = require('./chai.js');
   var expect = chai.expect;
   var ticTacToe = require('./model.js');
} catch (e) {}*/

describe("constructor", function(){
	"use strict";
	beforeEach(function(){
		board = ticTacToe.new();
		console.log("HEY");
	})

	it("test", function(){
		expect(false).to.equal(false);
	});
});