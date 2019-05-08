/**
 * https://leetcode.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */

export var hammingWeight = function(n) {
  return n
    .toString(2)
    .split('0')
    .join('').length;
};
