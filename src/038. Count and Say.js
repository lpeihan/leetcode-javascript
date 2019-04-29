/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
export var countAndSay = function(n) {
  let str = '1';

  for (let i = 1; i < n; i++) {
    let newStr = '';
    let count = 1;

    for (var j = 1; j < str.length; j++) {
      if (str[j] === str[j - 1]) {
        count++;
      } else {
        newStr += count + str[j - 1];
        count = 1;
      }
    }

    newStr += count + str[j - 1];
    str = newStr;
  }

  return str;
};
