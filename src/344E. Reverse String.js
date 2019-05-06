/**
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export var reverseString = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    let t = s[l];
    s[l++] = s[r];
    s[r--] = t;
  }

  return s;
};
