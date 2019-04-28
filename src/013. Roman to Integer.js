/**
 * https://leetcode.com/problems/roman-to-integer/submissions/
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function (s) {
  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const cur = map.get(s[i]);
    const prev = map.get(s[i + 1]);

    if (prev && cur < prev) {
      sum -= cur;
    } else {
      sum += cur;
    }
  }

  return sum;
};
