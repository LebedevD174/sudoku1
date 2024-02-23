function isNotInRow(arr, row, val) {
    for (let i = 0; i < 9; i++) {
        if (arr[row * 9 + i] === val) {
            return false;
        }
    }
    return true;
}

function isNotInCol(arr, col, val) {
    for (let i = 0; i < 9; i++) {
        if (arr[i * 9 + col] === val) {
            return false;
        }
    }
    return true;
}
module.exports={isNotInCol, isNotInRow }