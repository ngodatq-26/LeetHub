/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var map = new Map();
    for (let i in nums) {
        map.set(nums[i], i);
    }
    
    if(!map.get(target)) {
        return -1;
    } else return map.get(target);
};