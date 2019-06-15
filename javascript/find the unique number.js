// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let first = arr[0], second = arr[1], third = arr[2];
    if (first === second) {
        // not unique
        for (let i = 0; i < arr.length; i++)
            if (arr[i] !== first) return arr[i];
    }
    else {
        //one is unique
        if (first === third) return second;
        else return first;
    }
}

// function findUniq(arr) {
//     let [a, b, c] = arr.slice(0, 3);
//     if (a != b && a != c) return a;
//     for (let x of arr) if (x != a) return x
// }