const initial = [
    [1, 0, 5, 0, 9, 0, 0, 8, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 8, 0, 0, 0, 0],
    [0, 3, 0, 0, 7, 4, 0, 1, 0],
    [0, 4, 0, 0, 0, 0, 0, 9, 0],
    [0, 2, 0, 5, 0, 0, 0, 0, 8],
    [0, 0, 0, 7, 5, 0, 0, 2, 1],
    [0, 0, 0, 8, 1, 0, 0, 6, 3],
    [8, 0, 0, 0, 0, 3, 0, 0, 0]
];
const solveSudoku = require('./index.js');

console.time('a');
console.log(solveSudoku(initial))
console.timeEnd('a');
