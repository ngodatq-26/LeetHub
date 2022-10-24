/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    
    var arr = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            arr.push(nums[i]);
        } else count ++;
    }
    
    for (let i = 0;i < count; i++) {
        arr.push(0);
    }
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = arr[i]
    }
};