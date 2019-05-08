/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export var isAnagram = function(s, t) {
  let len = s.length;
  if (len !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < len; i++) {
    const sVal = s[i];
    const tVal = t[i];
    sMap.has(sVal) ? sMap.set(sVal, sMap.get(sVal) + 1) : sMap.set(sVal, 1);
    tMap.has(tVal) ? tMap.set(tVal, tMap.get(tVal) + 1) : tMap.set(tVal, 1);
  }

  for (const [key, val] of sMap.entries()) {
    if (tMap.get(key) !== val) {
      return false;
    }
  }

  return true;
};

export var isAnagram_0 = function(s, t) {
  return (
    s
      .split('')
      .sort()
      .join('') ===
    t
      .split('')
      .sort()
      .join('')
  );
};

export var isAnagram_1 = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  s.split('').forEach(i =>
    map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1)
  );
  t.split('').forEach(i =>
    map.has(i) ? map.set(i, map.get(i) - 1) : map.set(i, -1)
  );

  return [...map.values()].every(val => val === 0);
};
