import { singleNumber, singleNumber_0 } from '../src/260E. Single Number III';

test('singleNumber', () => {
  expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
});

test('singleNumber_0', () => {
  expect(singleNumber_0([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
});
