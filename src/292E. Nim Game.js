/**
 * https://leetcode.com/problems/nim-game/
 * @param {number} n
 * @return {boolean}
 */
export var canWinNim = function(n) {
  return n % 4 !== 0;
};
