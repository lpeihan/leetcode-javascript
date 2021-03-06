function isUnique(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      return false;
    }

    map[s[i]] = true;
  }

  return true;
}

function maxLength(arr) {
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
}

console.log(maxLength(['un', 'iq', 'ue']));
