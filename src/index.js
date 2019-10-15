module.exports = function solveSudoku(matrix) {
    const sudoku = matrix;
    const stack = []

    const result = calculate(sudoku, stack);
    return result;
}

function calculate(sudoku, stack) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] !== 0) {
                continue;
            }
            const last = stack[stack.length - 1];
            let available;
            if (last && last.i === i && last.j === j) {
                available = [...last.available];
            } else {
                available = getSquareCandidates(sudoku, i, j).sort();
                stack.push({i, j, available});
            }

            while (available.length > 0) {
                if (canInsert(sudoku, i, j, available[available.length-1])) {
                    sudoku[i][j] = available[available.length-1];

                    break;
                } else {
                    available.pop();
                }
            }
            if (sudoku[i][j] === 0) {
                stack.pop();
                const last = stack[stack.length - 1];
                last.available.splice(last.available.indexOf(sudoku[last.i][last.j]));
                sudoku[last.i][last.j] = 0;
                i = last.i;
                j = last.j - 1;
            } else {
                // easyCheck(sudoku, stack);
                // console.log(stack);
            }
        }
    }
    return sudoku;
}


function canInsert(sudoku, i, j, number) {
    const is_free_row = isFreeInRow(sudoku, i, number);
    const is_free_column = isFreeInColumn(sudoku, j, number);
    return is_free_column && is_free_row;
}

function isFreeInRow(sudoku, i, number) {
    for (let k = 0; k < 9; k++) {
        if (sudoku[i][k] === number) {
            return false;
        }
    }
    return true;
}

function isFreeInColumn(sudoku, j, number) {
    for (let k = 0; k < 9; k++) {
        if (sudoku[k][j] === number) {
            return false;
        }
    }
    return true;
}

function easyCheck(sudoku, stack) {
    for (let i = 0; i < 9; i++) {
        const row = sudoku[i];
        for (let j = 0; j < 9; j++) {
            if (row[j] === 0) {
                trySolvePosition(sudoku, i, j, stack);
            }
        }
    }
}

function trySolvePosition(sudoku, i, j, stack) {


    let success = checkLastInRow(sudoku, i, j);
    if (success) {
        stack.push({i, j, available: [sudoku[i][j]]})
    }
    success = checkLastInSquare(sudoku, i, j);
    if (success) {
        stack.push({i, j, available: [sudoku[i][j]]})
    }
}

function checkLastInRow(sudoku, i, j) {
    const row_candidates = get10();
    const column_candidates = get10();
    for (let k = 0; k < 9; k++) {
        if (row_candidates.includes(sudoku[i][k])) {
            row_candidates.splice(row_candidates.indexOf(sudoku[i][k]), 1);
        }
        if (column_candidates.includes(sudoku[k][j])) {
            column_candidates.splice(column_candidates.indexOf(sudoku[k][j]), 1);
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
    return false;
}

function checkLastInSquare(sudoku, i, j) {
    const square_candidates = getSquareCandidates(sudoku, i, j)
    if (square_candidates.length === 1) {
        sudoku[i][j] = square_candidates[0];
        return true;
    }
    return false;
}

function getSquareCandidates(sudoku, i, j) {
    const offset_x = Math.floor((i) / 3) * 3;
    const offset_y = Math.floor((j) / 3) * 3;
    const square_candidates = get10();
    for (let a = offset_x; a < offset_x + 3; a++) {
        for (let b = offset_y; b < offset_y + 3; b++) {
            if (square_candidates.includes(sudoku[a][b])) {
                square_candidates.splice(square_candidates.indexOf(sudoku[a][b]), 1);
            }
        }
    }
    return square_candidates;
}

function get10() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
