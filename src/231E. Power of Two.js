/**
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
export var isPowerOfTwo = function(n) {
  let i = 0;

  while (true) {
    let sum = Math.pow(2, i);
    if (sum < n) {
      i++;
    } else if (sum === n) {
      return true;
    } else {
      return false;
    }
  }
};

export var isPowerOfTwo_0 = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};

export var isPowerOfTwo_1 = function(n) {
  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
};
