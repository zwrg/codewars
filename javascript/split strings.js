// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    let arr = [];
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str.charAt(i) + str.charAt(i + 1));
    }
    if (str.length % 2 !== 0) {
        arr[arr.length - 1] = arr[arr.length - 1].concat('_');
    }
    return arr;
}

// function solution(str) {
//     return (str + "_").match(/../g);
// }