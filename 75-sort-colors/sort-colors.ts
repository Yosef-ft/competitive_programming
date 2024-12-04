/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low: number = 0;
    let high: number = nums.length -1;
    let mid: number = 0;
    
    while (mid <= high){
        if (nums[mid] == 0){
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            mid +=1;
            low += 1;
        }
        else if (nums[mid] == 1) mid += 1;
        
        else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high -= 1;
        }
    }    
};