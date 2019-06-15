// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    let array = [];
    let count_zero = 0;
    arr.map(v => {
        if (v !== 0) array.push(v);
        else count_zero++;
    })
    for (let i = 0; i < count_zero; i++) array.push(0);
    return array;
}

// var moveZeros = function (arr) {
//     return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
// }