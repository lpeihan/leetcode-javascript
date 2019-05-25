import {
  maxProfit,
  maxProfit_0
} from '../src/121E. Best Time to Buy and Sell Stock';

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('maxProfit_0', () => {
  expect(maxProfit_0([7, 1, 5, 3, 6, 4])).toBe(5);
});
