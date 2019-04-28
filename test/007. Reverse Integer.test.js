import { reverse_0, reverse } from '../src/007. Reverse Integer';

test('reverse_0', () => {
  expect(reverse_0(123)).toBe(321);
  expect(reverse_0(-123)).toBe(-321);
  expect(reverse_0(120)).toBe(21);
});

test('reverse', () => {
  expect(reverse(123)).toBe(321);
  expect(reverse(-123)).toBe(-321);
  expect(reverse(120)).toBe(21);
});
