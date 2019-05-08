import { isPowerOfThree } from '../src/326E. Power of Three';

test('isPowerOfThree', () => {
  expect(isPowerOfThree(27)).toBe(true);
  expect(isPowerOfThree(45)).toBe(false);
  expect(isPowerOfThree(0)).toBe(false);
});
