/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sum = 0;
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = Math.pow(-2, 31);
    
    while (x) {
        sum = sum * 10 + x % 10;
        x = x / 10 | 0;
        
        if (sum < MIN_VALUE || sum > MAX_VALUE) {
            return 0;
        } 
    }
    
    return sum;
};
