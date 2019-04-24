/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i] === nums[i + 1]) {
//         nums.splice(i, 1);
//         i--;
//       }
//     }
  
//    return nums.length;
// };

var removeDuplicates = function(nums) {
  let fast = 1;
  let slow = 1;
  
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }
    
    fast++;
  }
  
  return slow;
};
