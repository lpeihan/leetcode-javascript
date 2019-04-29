/**
 * @param {number[]} nums
 * @return {number}
 */
export var maxSubArray_0 = function(nums) {
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

// 在线处理
/**
 * @param {number[]} nums
 * @return {number}
 */
export var maxSubArray = function(nums) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum < 0) {
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    } else if (sum > max) {
      max = sum;
    }
  }

  return max;
};

// todo 分而治之
