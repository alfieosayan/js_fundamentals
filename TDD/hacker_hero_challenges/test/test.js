const chai = require("chai");
const expect = chai.expect;

const challenges = require("../challenges/challenge");

describe("Sum", function () {
	it("sum(3,2) should return 5", () => {
		expect(challenges.sum(3, 2)).to.equal(5);
	});
	it("sum(3,10) should return 13", () => {
		expect(challenges.sum(3, 10)).to.equal(13);
	});
	it("sum(-3,4) should return 1", () => {
		expect(challenges.sum(-3, 4)).to.equal(1);
	});
	it("sum(-5,10) should return 5", () => {
		expect(challenges.sum(-5, 10)).to.equal(5);
	});
});

describe("celciusToFahrenheit", () => {
	it("0 celcius to fahrenheit should return 32", () => {
		expect(challenges.celciusToFahrenheit(0)).to.equal(32);
	});
	it("10 celcius to fahrenheit should return 50", () => {
		expect(challenges.celciusToFahrenheit(10)).to.equal(50);
	});
	it("100 celcius to fahrenheit should return 212", () => {
		expect(challenges.celciusToFahrenheit(100)).to.equal(212);
	});
});

describe("Double Vision", () => {
	it("double([1,2,3]) to return [2,4,6]", () => {
		expect(challenges.double([1,2,3])).to.eql([2,4,6]);
	});
	it("double([-2, 0, 2]) to return [-4,0,4]", () => {
		expect(challenges.double([-2, 0, 2])).to.eql([-4,0,4]);
	});
	it("double([2,10,100]) to return [4,20,200]", () => {
		expect(challenges.double([2, 10, 100])).to.eql([4,20,200]);
	});
});

describe("Biggie Size", () => {
	it("makeItBig([-1,3,5,-5]) to return [-1,'big','big',-5]", () => {
		expect(challenges.makeItBig([-1,3,5,-5])).to.eql([-1, 'big', 'big', -5]);
	});
	it("double([2,4,6]) to return ['big,'big','big']", () => {
		expect(challenges.makeItBig([2,4,6])).to.eql(['big','big','big']);
	});
	it("double([-4,0,4]) to return [-4,0,'big]", () => {
		expect(challenges.makeItBig([-4, 0, 4])).to.eql([-4,0,'big']);
	});
});

describe("Return Array Count Greater Than Y", () => {
	it("returnArrayCountGreaterThanY( [2,3,5], 4) to return 1", () => {
		expect(challenges.returnArrayGreaterThanY([2,3,5], 4)).to.equal(1);
	});
	it("returnArrayCountGreaterThanY( [2,3,5], 1) to return 3", () => {
		expect(challenges.returnArrayGreaterThanY([2,3,5], 1)).to.equal(3);
	});
	it("returnArrayCountGreaterThanY( [4,10,15], 20) to return 0", () => {
		expect(challenges.returnArrayGreaterThanY([4,10,15], 20)).to.equal(0);
	});
});

describe("Sigma", () => {
	it("sigma(3) to return 6", () => {
		expect(challenges.sigma(3)).to.equal(6);
	});
	it("sigma(6) to return 21", () => {
		expect(challenges.sigma(6)).to.equal(21);
	});
	it("sigma(8) to return 36", () => {
		expect(challenges.sigma(8)).to.equal(36);
	});
});

describe("Factorial", () => {
	it("factorial(5) to return 120", () => {
		expect(challenges.factorial(5)).to.equal(120)
	});
	it("factorial(7) to return 5040", () => {
		expect(challenges.factorial(7)).to.equal(5040)
	});
	it("factorial(8) to return 40320", () => {
		expect(challenges.factorial(8)).to.equal(40320)
	});
});

describe("Swap Toward Center", () => {
	it("swapTowardCenter([true,42,'Ada',2,'pizza']) to return ['pizza',2,'Ada',42,true]", () => {
		expect(challenges.swapTowardCenter([true,42,'Ada',2,'pizza'])).to.eql(['pizza',2,'Ada',42,true])
	});
	it("swapTowardCenter([1,2,3,4,5,6]) to return [6,5,4,3,2,1]", () => {
		expect(challenges.swapTowardCenter([1,2,3,4,5,6])).to.eql([6,5,4,3,2,1])
	});
	it("swapTowardCenter(['hi', 'coding', 'dojo', 'fans']) to return ['fans','dojo','coding','hi']", () => {
		expect(challenges.swapTowardCenter(['hi', 'coding', 'dojo', 'fans'])).to.eql(['fans','dojo','coding','hi'])
	});
});

describe("Threes and Fives", () => {
	it("threesFives(10) to return 22", () => {
		expect(challenges.threesFives(10)).to.equal(22)
	});
	it("threesFives(15) to return 60", () => {
		expect(challenges.threesFives(15)).to.equal(60)
	});
});

describe("Fibonacci", () => {
	it("fibonacci(0) to return 0", () => {
		expect(challenges.fibonacci(0)).to.equal(0)
	});
	it("fibonacci(1) to return 1", () => {
		expect(challenges.fibonacci(1)).to.equal(1)
	});
	it("fibonacci(2) to return 1", () => {
		expect(challenges.fibonacci(2)).to.equal(1)
	});
	it("fibonacci(5) to return 5", () => {
		expect(challenges.fibonacci(5)).to.equal(5)
	});
	it("fibonacci(6) to return 8", () => {
		expect(challenges.fibonacci(6)).to.equal(8)
	});
	it("fibonacci(7) to return 13", () => {
		expect(challenges.fibonacci(7)).to.equal(13)
	});
});


