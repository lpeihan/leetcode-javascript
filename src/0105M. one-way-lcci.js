/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */

var oneEditAway = function(first, second) {
  if (first.length < second.length) {
    [first, second] = [second, first];
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      continue;
    } else {
      // 删除
      if (first.slice(0, i) + first.slice(i + 1) === second) {
        return true;
      }

      // 新增
      if (first.slice(0, i) + second[i] + first.slice(i) === second) {
        return true;
      }

      // 替换
      if (first.slice(0, i) + second[i] + first.slice(i + 1) === second) {
        return true;
      }

      return false;
    }
  }

  return true;
};
