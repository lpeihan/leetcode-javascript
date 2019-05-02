import { addBinary } from '../src/067E. Add Binary';

test('addBinary', () => {
  expect(addBinary('11', '1')).toBe('100');
  expect(addBinary('1010', '1011')).toBe('10101');
});
