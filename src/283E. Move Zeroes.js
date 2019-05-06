/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export var moveZeroes = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      len--;
    }
  }
};

/**
 * 快慢指针
 */
export var moveZeroes_0 = function(nums) {
  let s = 0;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[s++] = nums[i];
    }
  }

  for (let j = s; j < len; j++) {
    nums[j] = 0;
  }
};
