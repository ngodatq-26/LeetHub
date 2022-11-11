/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    for (let i in nums){
        console.log(i)
        if(nums[i] === val) {
            nums.splice(i, 1)
            
        }
    }
    for (let i in nums){
        console.log(i)
        if(nums[i] === val) {
            nums.splice(i, 1)
            
        }
    }
    return nums.length;
};