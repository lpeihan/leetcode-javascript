/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
export var isValid = function(s) {
  const left = new Map([['(', 1], ['{', 2], ['[', 3]]);
  const right = new Map([[')', 1], ['}', 2], [']', 3]]);

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const val = s[i];

    if (left.get(val)) {
      arr.push(left.get(val));
    } else {
      if (arr.pop() !== right.get(val)) {
        return false;
      }
    }
  }

  return arr.length === 0;
};
