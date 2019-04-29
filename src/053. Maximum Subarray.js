/**
 * @param {number[]} nums
 * @return {number}
 */
export var maxSubArray = function(nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
};
