const initial = [
    [0, 0, 4, 0, 5, 0, 0, 0, 0],
    [3, 5, 0, 0, 0, 0, 6, 9, 7],
    [6, 7, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 6, 8, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0, 8, 0],
    [0, 8, 0, 5, 0, 0, 3, 0, 0],
    [0, 3, 0, 9, 0, 0, 7, 0, 5],
    [0, 4, 0, 8, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 3, 0, 1, 0]
];
const solveSudoku = require('./index.js');

console.time('a');
console.log(solveSudoku(initial))
console.timeEnd('a');
