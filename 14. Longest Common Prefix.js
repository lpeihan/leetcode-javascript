/**
 * https://leetcode.com/problems/longest-common-prefix/submissions/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let index = 0;
    let prefix = '';
    while (strs.length && true) {
        let letter = strs[0][index];
        
        if (letter === undefined) {
            return prefix;
        }
        
        flag = false;
        
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][index] === letter) {
                
            } else {
                flag = true;
                return prefix;
            }
        }
        
        prefix += letter;
        index++;
    }
    
    return prefix;
};