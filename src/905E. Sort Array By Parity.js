/**
 * https://leetcode.com/problems/sort-array-by-parity/
 * @param {number[]} A
 * @return {number[]}
 */

export var sortArrayByParity = function(A) {
  let len = A.length;

  for (let i = 0; i < len; i++) {
    let val = A[i];
    if (val % 2 !== 0) {
      A.splice(i, 1);
      A.push(val);
      i--;
      len--;
    }
  }

  return A;
};

export var sortArrayByParity_0 = function(A) {
  let l = 0;
  let r = A.length;

  while (l < r) {
    if (A[l] % 2 !== 0) {
      if (A[r] % 2 === 0) {
        let temp = A[l];
        A[l] = A[r];
        A[r] = temp;
        l++;
        r--;
      } else {
        r--;
      }
    } else {
      l++;
    }
  }

  return A;
};
