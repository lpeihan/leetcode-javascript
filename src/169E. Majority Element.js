/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
export var majorityElement = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (var [k, v] of map.entries()) {
    if (v > nums.length / 2) {
      return k;
    }
  }
};
