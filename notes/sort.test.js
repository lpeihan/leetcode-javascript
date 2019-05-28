import { bubbleSort } from './sort';

test('bubbleSort', () => {
  const arr = [8, 1, 4, 2, 7, 3, 6, 5];
  expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
