/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        var check = (i*1 + k) % nums.length
        arr[check] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};