const S = 'a1b2';

var letterCasePermutation_2 = function(S) {
  const result = [];
  const arr = [];
  const LETTER_REG = /[a-zA-Z]/;

  // 把字符串转换成数组格式 [["a", "A"], ["1"], ["b", "B"], ["2"]]
  for (let i = 0; i < S.length; i++) {
    const val = S[i];

    if (LETTER_REG.test(val)) {
      arr[i] = [val.toLowerCase(), val.toUpperCase()];
    } else {
      arr[i] = [val];
    }
  }

  // 回溯递归
  // y 表示当前第几个字母
  function backtrack(y, list) {
    if (y >= arr.length) {
      result.push(list);
      return;
    }

    for (let i = 0; i < arr[y].length; i++) {
      backtrack(y + 1, list + arr[y][i]);
    }
  }

  backtrack(0, '');

  return result;
};

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const len = S.length;
  let result = [];
  const LETTER_REG = /[a-zA-Z]/;

  for (let i = 0; i < len; i++) {
    const val = S[i];
    if (LETTER_REG.test(val)) {
      if (i === 0) {
        result.push(val.toLowerCase(), val.toUpperCase());
      } else {
        result = [...result, ...result];
        for (let j = 0; j < result.length; j++) {
          if (j < result.length / 2) {
            result[j] += val.toLowerCase();
          } else {
            result[j] += val.toUpperCase();
          }
        }
      }
    } else {
      if (i === 0) {
        result.push(val);
      } else {
        for (let j = 0; j < result.length; j++) {
          result[j] += val;
        }
      }
    }
  }

  return result;
};

console.log(letterCasePermutation(S));
