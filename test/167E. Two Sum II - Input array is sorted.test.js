import {
  twoSum,
  twoSum_0
} from '../src/167E. Two Sum II - Input array is sorted';

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(twoSum([2, 7, 11, 15], 21)).toEqual(null);
});

test('twoSum_0', () => {
  expect(twoSum_0([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(twoSum([2, 7, 11, 15], 21)).toEqual(null);
});
