/**
 * https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 * @param {string[]} arr
 * @return {number}
 */
function isUnique(s, s1 = '') {
  const map = {};

  s = s + s1;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      return false;
    }

    map[s[i]] = true;
  }

  return true;
}

var maxLength_0 = function(arr) {
  let list = ['', arr[0]];
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    list = [...list, ...list];
    for (let j = 0; j < list.length / 2; j++) {
      list[j] += arr[i];
    }
  }

  let max = 0;
  for (const s of list) {
    if (isUnique(s)) {
      max = Math.max(s.length, max);
    }
  }

  return max;
};

var maxLength = function(arr) {
  function dfs(index, str) {
    if (index === arr.length) {
      return 0;
    }

    const s = arr[index];

    if (isUnique(s, str)) {
      let len = s.length;

      let len1 = len + dfs(index + 1, str + s);
      let len2 = dfs(index + 1, str);
      return Math.max(len1, len2);
    }

    return dfs(index + 1, str);
  }

  return dfs(0, '');
};

console.log(maxLength(['un', 'iq', 'ue']));
