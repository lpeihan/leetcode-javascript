/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export var twoSum_0 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let sum = val + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }

  return null;
};

export var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
