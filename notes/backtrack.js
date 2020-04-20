const candidates = [2, 5, 10, 2, 4, 3];
const target = 7;

var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  var result = [];
  var n = candidates.length;

  function backtrack(start, sum, list) {
    if (sum === target) {
      result.push(list);
    }
    for (let i = start; i < n; i++) {
      if (candidates[i] + sum > target) break;
      // 相同数字只允许循环的第一个递归，避免重复
      // if (candidates[i] === candidates[i - 1] && i > start) continue;
      backtrack(i + 1, sum + candidates[i], [...list, candidates[i]]);
    }
  }

  backtrack(0, 0, []);

  return result;
};

console.log(combinationSum2(candidates, target));
