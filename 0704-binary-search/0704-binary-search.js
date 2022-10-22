/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var pivot = Math.round((left + right) / 2);
        if(nums[pivot] == target) {
            return pivot;
        } 
        else if (nums[pivot] > target) {
            right --;
        } else left ++;
    }
    return -1;
};