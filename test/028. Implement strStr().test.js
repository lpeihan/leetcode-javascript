import { strStr_0, strStr } from '../src/028. Implement strStr()';

test('strStr_0', () => {
  expect(strStr_0('hello', 'll')).toBe(2);
  expect(strStr_0('aaaaa', 'bba')).toBe(-1);
});

test('strStr', () => {
  expect(strStr('hello', 'll')).toBe(2);
  expect(strStr('aaaaa', 'bba')).toBe(-1);
});
