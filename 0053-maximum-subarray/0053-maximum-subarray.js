/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    max_num = nums[0];
    for (const item of nums) {
        sum += item
        max_num = Math.max(sum, max_num)
        if (sum < 0){
            sum = 0;
        };
    };
    return max_num;
};