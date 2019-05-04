/**
 * @param {number[]} digits
 * @return {number[]}
 */
export var plusOne = function(digits) {
  const len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
