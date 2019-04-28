/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, needle.length + i) === needle) {
            return i;
        }
    }
    
    return needle ? -1 : 0;
};
