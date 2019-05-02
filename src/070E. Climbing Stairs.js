/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */

/**
 * 递归算法
 */
export var climbStairs = (function() {
  const map = new Map([[0, 0], [1, 1], [2, 2]]);

  return function(n) {
    if (map.has(n)) {
      return map.get(n);
    } else {
      map.set(n, climbStairs(n - 1) + climbStairs(n - 2));
      return map.get(n);
    }
  };
})();
