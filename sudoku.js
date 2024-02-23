const {read} = require('./read')
const {isNotInCol, isNotInRow } = require('./isSolved')

function solve(arr) {
  for (let i = 0; i < 81; i++) {
    if (arr[i] === 0) {
        const row = Math.floor(i / 9);
        const col = i % 9;

        for (let val = 1; val <= 9; val++) {
            if (isNotInRow(arr, row, val) && isNotInCol(arr, col, val)) {
                arr[i] = val;
                if (solve(arr)) {
                    return true;
                }
                arr[i] = 0;
            }
        }
        return false;
    }
}
return true;
};

const arr = read();
solve(arr)
prettyBoard(arr)
function prettyBoard() {
  for (let i = 0; i < 9; i++) {
    let row = '';
    for (let j = 0; j < 9; j++) {
        row += arr[i * 9 + j] + ' ';
        if ((j + 1) % 3 === 0) {
            row += '| ';
        }
    }
    console.log(row.trim());
    if ((i + 1) % 3 === 0 && i !== 8) {
        console.log('---------------------');
    }
}
}


