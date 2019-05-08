import {
  isAnagram,
  isAnagram_0,
  isAnagram_1
} from '../src/242E. Valid Anagram';

test('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
});

test('isAnagram_0', () => {
  expect(isAnagram_0('anagram', 'nagaram')).toBe(true);
  expect(isAnagram_0('rat', 'car')).toBe(false);
});

test('isAnagram_1', () => {
  expect(isAnagram_1('anagram', 'nagaram')).toBe(true);
  expect(isAnagram_1('rat', 'car')).toBe(false);
});
