import { fib, fib_0, fib_1, fib_2, fib_3 } from '../src/509E. Fibonacci Number';

test('fib', () => {
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
});

test('fib_0', () => {
  expect(fib_0(2)).toBe(1);
  expect(fib_0(3)).toBe(2);
  expect(fib_0(4)).toBe(3);
});

test('fib_1', () => {
  expect(fib_1(2)).toBe(1);
  expect(fib_1(3)).toBe(2);
  expect(fib_1(4)).toBe(3);
});

test('fib_2', () => {
  expect(fib_2(2)).toBe(1);
  expect(fib_2(3)).toBe(2);
  expect(fib_2(4)).toBe(3);
});

test('fib_3', () => {
  expect(fib_3(2)).toBe(1);
  expect(fib_3(3)).toBe(2);
  expect(fib_3(4)).toBe(3);
});
