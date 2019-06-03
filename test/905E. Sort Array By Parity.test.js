import {
  sortArrayByParity,
  sortArrayByParity_0
} from '../src/905E. Sort Array By Parity';

test('sortArrayByParity', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
});

test('sortArrayByParity_0', () => {
  expect(sortArrayByParity_0([3, 1, 2, 4])).toEqual([4, 2, 1, 3]);
});
