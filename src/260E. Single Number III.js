/**
 * https://leetcode.com/problems/single-number-iii/
 * @param {number[]} nums
 * @return {number[]}
 */
export var singleNumber = function(nums) {
  const res = [0, 0];

  let n = nums.reduce((x, y) => {
    return x ^ y;
  });

  // 取出一位不一样的
  n = n & ~(n - 1);

  // 分组
  for (const num of nums) {
    if (num & n) {
      res[0] ^= num;
    } else {
      res[1] ^= num;
    }
  }

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export var singleNumber_0 = function(nums) {
  const map = new Map();
  const res = [];

  for (const num of nums) {
    map.has(num) ? map.set(num, 2) : map.set(num, 1);
  }

  for (const m of map) {
    m[1] === 1 && res.push(m[0]);
  }

  return res;
};
