import { removeElement_0, removeElement } from '../src/027. Remove Element';

test('removeElement_0', () => {
  expect(removeElement_0([3, 2, 2, 3], 3)).toBe(2);
  expect(removeElement_0([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});

test('removeElement', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
