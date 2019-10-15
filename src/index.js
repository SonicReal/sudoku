const sudok = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

solve(sudok);

function solve(sudoku) {
    for (let i = 0; i < 9; i++) {
        const row = sudoku[i];
        for (let j = 0; j < 9; j++) {
            if (row[j] === 0) {
                trySolvePosition(sudoku, i, j);
            }
        }
    }
    console.log(sudoku);
}

function trySolvePosition(sudoku, i, j) {

    const offset_x = Math.floor((i) / 3) * 3;
    const offset_y = Math.floor((j) / 3) * 3;
    let success = false;
    success = checkLastInRow(sudoku, i, j);
    if (success) {
        return;
    }
    success = checkLastInSquare(sudoku, i, j, offset_x, offset_y);
}

function checkLastInRow(sudoku, i, j) {
    const row_candidates = get10();
    const column_candidates = get10();
    const diagonal_candidates = get10();
    const diagonal2_candidates = get10();
    for (let k = 0; k < 9; k++) {
        if (row_candidates.includes(sudoku[i][k])) {
            row_candidates.splice(row_candidates.indexOf(sudoku[i][k]), 1);
        }

        if (column_candidates.includes(sudoku[k][j])) {
            column_candidates.splice(column_candidates.indexOf(sudoku[k][j]), 1);
        }
        if ((i === j) && diagonal_candidates.includes(sudoku[k][k])) {
            diagonal_candidates.splice(diagonal_candidates.indexOf(sudoku[k][k]), 1);
        }
        if ((j === (8 - i)) && diagonal2_candidates.includes(sudoku[k][8 - k])) {
            diagonal2_candidates.splice(diagonal2_candidates.indexOf(sudoku[k][8 - k]), 1);
        }
    }
    if (row_candidates.length === 1) {
        sudoku[i][j] = row_candidates[0];
        return true;
    }
    if (column_candidates.length === 1) {
        sudoku[i][j] = column_candidates[0];
        return true;
    }
    if (diagonal_candidates.length === 1) {
        sudoku[i][j] = diagonal_candidates[0];
        return true;
    }
    if (diagonal2_candidates.length === 1) {
        sudoku[i][j] = diagonal2_candidates[0];
        return true;
    }
    return false;
}

function checkLastInSquare(sudoku, i, j, offset_x, offset_y) {
    const square_candidates = get10();
    console.log('offsetx:' + offset_x)
    console.log('offsety:' + offset_y)
    for (let a = offset_x; a < offset_x + 3; a++) {
        for (let b = offset_y; b < offset_y + 3; b++) {
            console.log(sudoku[a][b])
            if (square_candidates.includes(sudoku[a][b])) {
                square_candidates.splice(square_candidates.indexOf(sudoku[a][b]), 1);
            }
        }
    }
    console.log(square_candidates);
    if (square_candidates.length === 1) {
        sudoku[i][j] = square_candidates[0];
        return true;
    }
    return false;
}

function get10() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}


module.exports = function solveSudoku(matrix) {


}
