const weights = [2, 2, 6, 5, 4];
const values = [6, 3, 5, 4, 6];
const W = 10;

function knapsack(weights, values, W) {
  const res = [[]];
  const N = weights.length - 1;

  for (let i = 0; i <= W; i++) {
    if (i < weights[0]) {
      res[0][i] = 0;
    } else {
      res[0][i] = values[0];
    }
  }

  for (let i = 0; i <= W; i++) {
    for (let j = 1; j <= N; j++) {
      if (!res[j]) {
        res[j] = [];
      }

      if (i < weights[j]) {
        res[j][i] = res[j - 1][i];
      } else {
        res[j][i] = Math.max(
          res[j - 1][i],
          res[j - 1][i - weights[j]] + values[j]
        );
      }
    }
  }

  return res;
}

const res = knapsack(weights, values, W);
console.log(JSON.stringify(res));
