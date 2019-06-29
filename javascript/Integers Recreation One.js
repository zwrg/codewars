// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function listSquared(m, n) {
    if (1 <= m <= n) {
        let result = [];
        for (let i = m; i <= n; i++) {
            let divisors = new Set();
            for (let j = 1; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    divisors.add(j);
                    divisors.add(i / j);
                };
            }
            let sum = [...divisors].map(v => v * v).reduce((a, c) => a + c);
            if (Number.isInteger(Math.sqrt(sum)))
                result.push([i, sum]);
        }
        return result;
    }
}

// function listSquared(m, n) {
//     var arr = [];
//     for (var i = m; i <= n; i++) {
//         var temp = 0;
//         for (var j = 1; j <= i; j++) {
//             if (i % j == 0) temp += j * j;
//         };
//         if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
//     };
//     return arr;
// }
