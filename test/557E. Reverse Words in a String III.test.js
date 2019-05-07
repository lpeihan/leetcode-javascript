import { reverseWords } from '../src/557E. Reverse Words in a String III';

test('reverseWords', () => {
  expect(reverseWords(`Let's take LeetCode contest`)).toBe(
    `s'teL ekat edoCteeL tsetnoc`
  );
});
