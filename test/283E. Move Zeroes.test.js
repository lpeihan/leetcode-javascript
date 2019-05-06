import { moveZeroes, moveZeroes_0 } from '../src/283E. Move Zeroes';

test('moveZeroes', () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test('moveZeroes_0', () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes_0(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});
