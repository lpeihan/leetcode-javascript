const weights = [0, 2, 2, 6, 5, 4];
const values = [0, 6, 3, 5, 4, 6];
const W = 10;

function knapsack(weights, values, W) {
  const arr = [];
  const N = weights.length;
  W = W + 1;

  for (let i = 0; i < N; i++) {
    arr[i] = [];
    for (let j = 0; j < W; j++) {
      arr[i][j] = 0;
    }
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < W; j++) {
      if (weights[i] > j) {
        arr[i][j] = arr[i - 1][j];
      } else {
        const value1 = arr[i - 1][j];
        const value2 = arr[i - 1][j - weights[i]] + values[i];

        arr[i][j] = Math.max(value1, value2);
      }
    }
  }

  console.log(arr);

  return arr[N - 1][W - 1];
}

const res = knapsack(weights, values, W);
console.log(JSON.stringify(res));
