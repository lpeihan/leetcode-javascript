import { maxSubArray, maxSubArray_0 } from '../src/053. Maximum Subarray';

test('maxSubArray_0', () => {
  expect(maxSubArray_0([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test('maxSubArray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
