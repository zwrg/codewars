// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let x = s.split(" ");
    let min = x[0].length;
    x.map((e) => {
        if (e.length < min) min = e.length;
    })
    return min;
}