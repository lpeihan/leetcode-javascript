/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
export var removeDuplicates_0 = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

export var removeDuplicates = function(nums) {
  let fast = 1;
  let slow = 1;

  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }

    fast++;
  }

  return slow;
};
