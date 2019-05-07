/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/
 * @param {string} s
 * @return {string}
 */
export var reverseWords = function(s) {
  return s
    .split(' ')
    .map(str => {
      return str
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
};
