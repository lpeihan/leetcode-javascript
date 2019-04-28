/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

export var strStr_0 = function(haystack, needle) {
  return haystack.indexOf(needle);
};

export var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, needle.length + i) === needle) {
      return i;
    }
  }

  return needle ? -1 : 0;
};
