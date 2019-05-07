import { isUgly } from '../src/263E. Ugly Number';

test('isUgly', () => {
  expect(isUgly(6)).toBe(true);
  expect(isUgly(14)).toBe(false);
  expect(isUgly(0)).toBe(false);
});
