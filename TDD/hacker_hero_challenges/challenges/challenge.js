function sum(num1, num2) {
	return num1 + num2;
}

function celciusToFahrenheit(cDegrees) {
	return (9 / 5) * cDegrees + 32;
}

function double(arr) {
	for(var i=0;i<arr.length;i++) {
		arr[i] = arr[i] * 2;
	}

	return arr;
}

function makeItBig(arr) {
	for(var i=0;i<arr.length;i++) {
		if(arr[i] > 0) {
			arr[i] = 'big';
		}
	}
	
	return arr;
}

function returnArrayGreaterThanY(arr, y) {
	var count = 0;
	for(var i=0;i<arr.length;i++) {
		if (arr[i] > y) {
			count++;
		}
	}
	return count;
}

function sigma(num) {
	var sum = 0;
	for(var i=1;i<=num;i++) {
		sum = sum + i;
	}
	return sum;
}

function factorial(num) {
	var result = num;
	while(num > 1) {
		num--;
		result = result * num;
	}
	return result;
}

function swapTowardCenter(arr) {
	var temp = arr[0];
	var x = arr.length;
	for(var i=0;i<arr.length / 2;i++) {
		arr[i] = arr[x - 1];
		arr[x - 1] = temp;
		temp = arr[i + 1];
		x -= 1;
	}
	return arr;
}

function threesFives(num) {
	var sum = 0;
	for(var i=1;i<=num;i++) {
		if(i%3 !== 0 && i%5 !== 0) {
			sum = sum + i;
		}
	}
	return sum;
}

function fibonacci(index) {
	var num1 = 0;
	var num2 = 1;
	var sec = 0;
	for(var i=1;i<index;i++) {
		sec = num1 + num2;
		num1 = num2;
		num2 = sec;
	}
	if(index <= 1 || 0) {
		return index;
	}
	return sec;
}

module.exports = {
	sum,
	celciusToFahrenheit,
	double,
	makeItBig,
	returnArrayGreaterThanY,
	sigma,
	factorial,
	swapTowardCenter,
	threesFives,
	fibonacci
};
