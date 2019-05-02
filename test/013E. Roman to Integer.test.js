import { romanToInt } from '../src/013E. Roman to Integer';

test('romanToInt', () => {
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('MCMXCIV')).toBe(1994);
});
