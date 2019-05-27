/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let val = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (target === val + numbers[j]) {
        return [i + 1, j + 1];
      }
    }
  }

  return null;
};

export var twoSum_0 = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }

  return null;
};
