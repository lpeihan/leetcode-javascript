import { canWinNim } from '../src/292E. Nim Game';

test('canWinNim', () => {
  expect(canWinNim(4)).toBe(false);
  expect(canWinNim(5)).toBe(true);
});
