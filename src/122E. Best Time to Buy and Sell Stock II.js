/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
export var maxProfit = function(prices) {
  let profit = 0;
  let prev = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let current = prices[i];
    let diff = current - prev;
    prev = current;
    if (diff > 0) {
      profit += diff;
    }
  }

  return profit;
};
