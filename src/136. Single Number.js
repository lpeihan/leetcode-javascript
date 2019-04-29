/**
 * @param {number[]} nums
 * @return {number}
 */
export var singleNumber_0 = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    map.has(key) ? map.set(key, 2) : map.set(key, 1);
  }

  for (const item of map.entries()) {
    if (item[1] === 1) {
      return item[0];
    }
  }
};

export var singleNumber_1 = function(nums) {
  return nums.reduce((x, y) => {
    return x ^ y;
  });
};

export var singleNumber_2 = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    map.has(key) ? map.delete(key) : map.set(key, 1);
  }

  return [...map.keys()][0];
};

export var singleNumber = function(nums) {
  let sum = 0;

  for (const num of nums) {
    sum ^= num;
  }

  return sum;
};
