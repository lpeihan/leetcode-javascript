import { twoSum, twoSum_0 } from '../src/001E. Two Sum';

test('twoSum_0', () => {
  expect(twoSum_0([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum_0([2, 7, 11, 15], 10)).toBe(null);
});

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([2, 7, 11, 15], 10)).toBe(null);
});
