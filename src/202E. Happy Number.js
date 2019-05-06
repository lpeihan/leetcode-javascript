/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
export var isHappy = function(n) {
  const map = {};

  while (n !== 1) {
    if (map[n]) {
      return false;
    }

    map[n] = true;
    let sum = 0;
    while (n) {
      let x = n % 10;
      sum = sum + x * x;

      n = (n / 10) | 0;
    }

    n = sum;
  }

  return true;
};

isHappy(19);
