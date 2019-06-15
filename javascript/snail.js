// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

snail = function (array) {
	let result = [];
	while (array.length) {
		result = (result ? result.concat(array.shift()) : array.shift());
		for (let i = 0; i < array.length; i++)
			result.push(array[i].pop());
		result = result.concat((array.pop() || []).reverse());
		for (let i = array.length - 1; i >= 0; i--)
			result.push(array[i].shift());
	}
	return result;
}
