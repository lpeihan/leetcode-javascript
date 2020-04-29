/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let sum = nums[i];

    for (let j = i + 1; j < len; j++) {
      sum += nums[j];

      if (k === 0 && sum === 0) {
        return true;
      }

      if (sum % k === 0) {
        return true;
      }
    }
  }

  return false;
};
