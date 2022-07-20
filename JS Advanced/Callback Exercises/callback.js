// 1.
function filterArray(array, callback) {
	let newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i]) === true) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

let filter_array = filterArray([1, 2, 3, 4, 15], function (num) {
	return num > 10;
});
console.log(filter_array);

// 2.
function add(a, b) {
	return function () {
		return a + b;
	};
}
let result = add(3, 5);
console.log(result());

// 3.
function twoFunc(func1, func2) {
	Math.random() < 0.5 ? func1() : func2();
}

twoFunc(
	function () {
		console.log("1");
	},
	function () {
		console.log("2");
	}
);
