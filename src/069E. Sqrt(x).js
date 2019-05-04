/**
 * https://leetcode.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */

export var mySqrt = function(x) {
  return Math.sqrt(x) | 0;
};

/**
 * 二分法 binarySearch
 */
export var mySqrt_0 = function(x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = parseInt((left + right) / 2, 10);

    if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return left - 1;
};
