/**
 * fibonacci
 */
function fib(N) {
  if (N <= 1) {
    return N;
  }

  return fib(N - 1) + fib(N - 2);
}

function fib_2(N) {
  const cache = [0, 1];

  function memoize(i) {
    if (cache[i] !== undefined) {
      return cache[i];
    }

    cache[i] = memoize(i - 1) + memoize(i - 2);

    return cache[i];
  }

  return memoize(N);
}

function fib_3(N) {
  const cache = [0, 1];

  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[N];
}

function fib_4(N) {
  let prev = 0;
  let current = 1;

  for (let i = 2; i <= N; i++) {
    const tmp = current;
    current = prev + current;
    prev = tmp;
  }

  return current;
}

const N = 6;
// console.log(fib_4(N));

/**
 * 给定4种面额的硬币1分，2分，5分，6分，如果要找11分的零钱，怎么做才能使得找的硬币数量总和最少。
 * 状态转移方程 arr[i] = min(arr[i-C1]+1,arr[i-C2]+1,arr[i-C3]+1,……,arr[i-Cj]+1])
 */

function minCoin(coins, total) {
  const arr = [0];

  for (let i = 1; i <= total; i++) {
    arr[i] = Number.POSITIVE_INFINITY;

    for (let j = 0; j < coins.length; j++) {
      if (coins[j] > i) {
        continue;
      }

      const num = arr[i - coins[j]] + 1;
      if (num < arr[i]) {
        arr[i] = num;
      }
    }
  }

  return arr[total - 1];
}
const coins = [1, 2, 5, 6];
const total = 11;
console.log(minCoin(coins, total));
