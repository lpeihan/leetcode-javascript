/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {
  const result = [];

  function backtrack(start, sum, list) {
    if (sum === target) {
      result.push(list);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const val = candidates[i];
      if (sum + val <= target) {
        backtrack(i + 1, sum + val, [...list, val]);
      }
    }
  }

  backtrack(0, 0, []);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
