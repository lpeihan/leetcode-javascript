/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  let result = Infinity;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        console.log(nums[i], nums[j], nums[k]);

        if (Math.abs(sum - target) < Math.abs(result - target)) {
          result = sum;
        }
      }
    }
  }

  return result;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([1, 1, 1, 0], -100));
// 1 1 1 0 -100
