import { isHappy } from '../src/202E. Happy Number';

test('isHappy', () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(20)).toBe(false);
});
