/**
 * @param {string} s
 * @return {number}
 */
export var lengthOfLastWord_0 = function(s) {
  let ret = '';
  let flag = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      if (flag) {
        ret = s[i];
        flag = false;
      } else {
        ret += s[i];
      }
    } else {
      flag = true;
    }
  }

  return ret.length;
};

export var lengthOfLastWord = function(s) {
  const arr = s.trim().split(' ');

  return arr[arr.length - 1].length;
};
