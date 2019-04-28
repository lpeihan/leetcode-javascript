import { longestCommonPrefix } from '../src/014. Longest Common Prefix';

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
});
