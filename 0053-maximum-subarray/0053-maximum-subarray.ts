function maxSubArray(nums: number[]): number {
    let sum: number = 0;
    let max_num: number = nums[0];
    for (const item of nums){
        sum += item
        max_num = Math.max(sum, max_num)
        
        if (sum < 0){
            sum = 0
        }
    }
    return max_num;
};