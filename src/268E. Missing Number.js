/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
export var missingNumber = function(nums) {
  let sum = 0;
  let total = nums.length;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i;
  }

  return total - sum;
};

export var missingNumber_0 = function(nums) {
  const len = nums.length;
  const initialVal = (len * (len + 1)) / 2;

  return nums.reduce((a, e) => a - e, initialVal);
};
