/**
 * https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

export var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0; // 用 carry 表示是否进位
  let res = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry + parseInt(a[i--] || 0) + parseInt(b[j--] || 0);

    if (sum >= 2) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }

    res = sum + res;
  }

  return res;
};
