import { reverseString } from '../src/344E. Reverse String';

test('reverseString', () => {
  expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
    'o',
    'l',
    'l',
    'e',
    'h'
  ]);
});
