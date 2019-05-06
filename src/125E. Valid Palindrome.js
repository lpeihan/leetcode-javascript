/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
export var isPalindrome = function(s) {
  s = s.replace(/\W/g, '').toLowerCase();

  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
