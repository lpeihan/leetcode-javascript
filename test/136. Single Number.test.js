import {
  singleNumber_0,
  singleNumber_1,
  singleNumber
} from '../src/136. Single Number';

test('singleNumber_0', () => {
  expect(singleNumber_0([2, 2, 1])).toBe(1);
  expect(singleNumber_0([4, 1, 2, 1, 2])).toBe(4);
});

test('singleNumber_1', () => {
  expect(singleNumber_1([2, 2, 1])).toBe(1);
  expect(singleNumber_1([4, 1, 2, 1, 2])).toBe(4);
});

test('singleNumber', () => {
  expect(singleNumber([2, 2, 1])).toBe(1);
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});
