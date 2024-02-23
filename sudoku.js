function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve(read()) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  for (let i = 0; i < 81; i++) {
    if (arr[i] === 0) {
        const row = Math.floor(i / 9);
        const col = i % 9;

        for (let val = 1; val <= 9; val++) {
            if (isNotInRow(arr, row, val) && isNotInCol(arr, col, val)) {
                arr[i] = val;
                if (solveSudoku(arr)) {
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


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
