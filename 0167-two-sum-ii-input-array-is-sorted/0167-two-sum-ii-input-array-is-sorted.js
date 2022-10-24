/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    
    while(left < right) {
        var sum = numbers[left] + numbers[right];
        
        if(sum == target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right = right - 1;
        } else left = left + 1;
    }
    return [left + 1, right + 1]
};