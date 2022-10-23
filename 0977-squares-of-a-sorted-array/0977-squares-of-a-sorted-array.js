/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i in nums) {
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a, b) => {
        return a -b;
    });
    return nums;
};