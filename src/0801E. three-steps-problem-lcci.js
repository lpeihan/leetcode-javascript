/**
 * @param {number} n
 * @return {number}
 */
var waysToStep_0 = function(n) {
  const cache = [0, 1, 2, 4];
  const FUCK = 1000000007;

  function memory(index) {
    if (cache[index]) {
      return cache[index] % FUCK;
    }

    const a = memory(index - 1);
    const b = memory(index - 2);
    const c = memory(index - 3);

    cache[index] = (a + b + c) % FUCK;

    return cache[index];
  }

  return memory(n);
};

var waysToStep_1 = function(n) {
  const cache = [0, 1, 2, 4];
  const FUCK = 1000000007;

  for (let i = 4; i <= n; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2] + cache[i - 3]) % FUCK;
  }

  return cache[n];
};

var waysToStep = function(n) {
  let a = 1;
  let b = 2;
  let c = 4;
  let result = 0;
  const FUCK = 1000000007;

  for (let i = 4; i <= n; i++) {
    result = (a + b + c) % FUCK;
    a = b;
    b = c;
    c = result;
  }

  return result;
};
