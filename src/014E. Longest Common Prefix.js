/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
export var longestCommonPrefix = function(strs) {
  let index = 0;
  let prefix = '';
  while (strs.length && true) {
    let letter = strs[0][index];

    if (letter === undefined) {
      return prefix;
    }

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] === letter) {

      } else {
        return prefix;
      }
    }

    prefix += letter;
    index++;
  }

  return prefix;
};
