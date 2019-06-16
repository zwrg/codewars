// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292

var memo = [];
function sum(num, m = num) {
    if (num === 0) return 1;
    if (m === 0 || num < 0) return 0;
    if (!memo[num]) memo[num] = [];
    let total = memo[num][m];
    if (parseInt(total) !== total) {
        total = sum(num - m, m) + sum(num, m - 1);
        memo[num][m] = total;
    }
    return total;
}

// good - not optimal af
// const p = (k, n) => {
//     if (k === 0 && n === 0) return 1;
//     if (k <= 0 || n <= 0) return 0;
//     return p(k, n - k) + p(k - 1, n - 1)
// }
// function sum(num) {
//     let total = 0;
//     for (let k = 1; k <= num; k++) {
//         total += p(k, num);
//     }
//     return total;
// }

// var memo = [];

// function sum(n, m = n) {
//     if (n == 0) return 1;
//     if (n < 0 || m == 0) return 0;
//     if (memo[n] && memo[n][m]) return memo[n][m];
//     let total = sum(n, m - 1) + sum(n - m, m);
//     if (!memo[n]) {
//         memo[n] = [];
//     }
//     memo[n][m] = total;
//     return total;
// }