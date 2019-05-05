import { isPalindrome } from '../src/125E. Valid Palindrome';

test('isPalindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(isPalindrome('race a car')).toBe(false);
});
