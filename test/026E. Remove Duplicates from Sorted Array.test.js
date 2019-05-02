import {
  removeDuplicates_0,
  removeDuplicates
} from '../src/026E. Remove Duplicates from Sorted Array';

test('removeDuplicates_0', () => {
  expect(removeDuplicates_0([1, 1, 2])).toBe(2);
});

test('removeDuplicates', () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});
