/* foreach */
function foreach(array, callback) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr[i] = callback(array[i]);
	}
	return newArr;
}

// let result = foreach([1,2,3,4,5], function(num) { return num*2; });
// console.log(result); //this should log [2,4,6,8,10]

// result = foreach([1,2,3,"v88", "training"], function(val) { 
//     if(typeof(val) === 'number') { 
//         return 0;
//     }
//     else {
//         return val;
//     }
// });
// console.log(result); //this should log [0,0,0,"v88","training"]

// result = foreach([1,2,3,"hello"], function(val) { return typeof(value); });
// console.log(result); //this should log ["number", "number", "number", "string"]

/* filter */
function filter(array, callback) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i]) === true) {
			newArr[i] = array[i];
		}
	}
	return newArr;
}

// let result = foreach([1,2,3,4,5], function(num) { return num*2; });
// console.log(result); //this should log [2,4,6,8,10]
// //
// result = foreach([1,2,3,"v88", "training"], function(val) { 
//     return ( (typeof(value) === 'number') ? 0 : val);
// });
// console.log(result); //this should log [0,0,0,"v88","training"]
// //
// result = foreach([1,2,3,"hello"], function(val) { return typeof(value); });
// console.log(result); //this should log ["number", "number", "number", "string"]

/* reject */
function reject(array, callback) {
	let newArr = [];
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i]) !== true) {
			newArr[count] = array[i];
			count++;
		}
	}
	return newArr;
}
