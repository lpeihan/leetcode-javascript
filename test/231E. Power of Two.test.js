import {
  isPowerOfTwo,
  isPowerOfTwo_0,
  isPowerOfTwo_1
} from '../src/231E. Power of Two';

test('isPowerOfTwo', () => {
  expect(isPowerOfTwo(16)).toBe(true);
  expect(isPowerOfTwo(218)).toBe(false);
});

test('isPowerOfTwo_0', () => {
  expect(isPowerOfTwo_0(16)).toBe(true);
  expect(isPowerOfTwo_0(218)).toBe(false);
});

test('isPowerOfTwo_1', () => {
  expect(isPowerOfTwo_1(16)).toBe(true);
  expect(isPowerOfTwo_1(218)).toBe(false);
});
