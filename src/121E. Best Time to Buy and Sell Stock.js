/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
export var maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i];
      if (diff > max) {
        max = diff;
      }
    }
  }

  return max;
};

export var maxProfit_0 = function(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let val = prices[i];
    if (min > val) {
      min = val;
    } else if (val - min > maxProfit) {
      maxProfit = val - min;
    }
  }

  return maxProfit;
};
