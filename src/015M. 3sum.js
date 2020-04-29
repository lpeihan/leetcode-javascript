/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [-1, 0, 1, 2, -1, -4]
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const result = [];

  for (let i = 0; i < len - 2; i++) {
    const a = nums[i];
    for (let j = i + 1; j < len - 1; j++) {
      const b = nums[j];
      for (let k = j + 1; k < len; k++) {
        const c = nums[k];
        if (a + b + c === 0) {
          const res = result[result.length - 1] || [];

          if (!(res[0] === a && res[1] === b && res[2] === c)) {
            result.push([a, b, c]);
          }
        }
      }
    }
  }

  console.log(result);

  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
