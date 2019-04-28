import { isValid } from '../src/020. Valid Parentheses';

test('isValid', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
});
