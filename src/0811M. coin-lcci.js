/**
 * https://leetcode-cn.com/problems/coin-lcci/
 * @param {number} n
 * @return {number}
 */

// 25 10 5 1
var waysToChange = function(n) {
  const FUCK = 1000000007;
  const arr = [];
  const coins = [0, 1, 5, 10, 25];

  for (let i = 0; i < coins.length; i++) {
    arr[i] = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < coins.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (coins[i] > j) {
        arr[i][j] = arr[i - 1][j];
      } else {
        const n1 = arr[i][j - coins[i]];
        const n2 = arr[i - 1][j];

        arr[i][j] = n1 + n2;
      }
    }
  }

  console.log('result', arr);

  return arr[coins.length - 1][n] % FUCK;
};

waysToChange(5);
