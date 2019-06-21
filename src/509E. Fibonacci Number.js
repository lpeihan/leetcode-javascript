/**
 * @param {number} n
 * @return {number}
 */

/**
 * 递归
 */
export var fib = function(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

/**
 * 递归优化
 */
export var fib_0 = (function() {
  const map = new Map([[0, 0], [1, 1], [2, 1]]);
  return function(n) {
    if (map.has(n)) {
      return map.get(n);
    }

    map.set(n, fib_0(n - 1) + fib_0(n - 2));

    return map.get(n);
  };
})();

/**
 * 动态规划
 */
export var fib_1 = function(n) {
  const arr = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

/**
 * 动态规划优化
 */
export var fib_2 = function(n) {
  let current = 0;
  let next = 1;
  let temp;
  for (let i = 0; i < n; i++) {
    temp = current;
    current = next;
    next += temp;
  }
  return current;
};

/**
 * 尾调用
 */
export var fib_3 = function(n, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }
  return fib_3(n - 1, next, current + next);
};
