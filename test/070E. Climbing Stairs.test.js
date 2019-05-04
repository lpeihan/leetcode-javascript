import {
  climbStairs,
  climbStairs_0,
  climbStairs_1
} from '../src/070E. Climbing Stairs';

test('climbStairs', () => {
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(44)).toBe(1134903170);
});

test('climbStairs_0', () => {
  expect(climbStairs_0(2)).toBe(2);
  expect(climbStairs_0(44)).toBe(1134903170);
});

test('climbStairs_1', () => {
  expect(climbStairs_1(2)).toBe(2);
  expect(climbStairs_1(44)).toBe(1134903170);
});
