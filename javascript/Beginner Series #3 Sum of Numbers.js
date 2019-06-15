/*
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function GetSum(a, b) {
    if (a === b)
        return a;
    else {
        let sum = 0;
        if (a < b) {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        }
        else {
            for (let i = b; i <= a; i++) {
                sum += i;
            }
        }
        return sum;
    }
}

/* better
    const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
    }
*/