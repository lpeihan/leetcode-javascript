/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */

/**
 * 递归算法
 * 因为递归算法会重复计算，所以这里用散列表来记录重复元素记录过的值
 * 空间复杂度为O(n)，时间复杂度降为O(n)，也正是利用了空间换时间的思想。
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

/**
 * 动态规划(递推法)
 */
export var climbStairs_0 = function(n) {
  const arr = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

/**
 * 优化后的动态规划，实际上f(n)只需要 f(n - 1) 和 f(n - 2)两个值，而不需要一个数组来记录，所以可以用两个变量来减少内存开销
 */
export var climbStairs_1 = function(n) {
  if (n <= 2) {
    return n;
  }
  let prev = 1;
  let mid = 2;
  let res = 0;

  for (let i = 3; i <= n; i++) {
    res = prev + mid;
    prev = mid;
    mid = res;
  }

  return res;
};
