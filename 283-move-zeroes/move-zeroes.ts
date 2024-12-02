/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let x: number = 0;
    for (let i=0; i<nums.length; i++){
        if (nums[i] != 0){
            let temp: number = nums[i];
            nums[i] = nums[x];
            nums[x] = temp;
            x +=1;
            
        }
    }
};