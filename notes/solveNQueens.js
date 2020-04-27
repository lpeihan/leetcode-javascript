/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = [];
  const board = [];
  const row = [];

  for (let i = 0; i < n; i++) {
    row.push('.');
  }

  function _check(y, x) {
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < n; j++) {
        if (
          board[i][j] === 'Q' &&
          (y === i || x === j || y - x === i - j || y + x === i + j)
        ) {
          return false;
        }
      }
    }

    return true;
  }

  function backtrack(y) {
    if (y >= n) {
      result.push(JSON.parse(JSON.stringify(board)));
      return;
    }

    for (let x = 0; x < n; x++) {
      board[y] = [...row];

      if (_check(y, x)) {
        board[y][x] = 'Q';
        backtrack(y + 1);
      }
    }
  }

  backtrack(0);

  return result;
};

console.log(solveNQueens(4));
