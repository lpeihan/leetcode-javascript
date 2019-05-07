/**
 * @param {number} num
 * @return {number}
 */
export var addDigits = function(num) {
  while (num >= 10) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = (num / 10) | 0;
    }

    num = sum;
  }

  return num;
};
