/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let break_point: number = -1;
    const n: number = nums.length;

    for(let i: number= n-2; i > -1; i -=1){
        if (nums[i] < nums[i+1]){
            break_point = i;
            break;
        }
    }

    if (break_point == -1) nums.reverse();  

    else{
        for (let i: number=n-1; i>break_point; i -=1){
            if (nums[i] > nums[break_point]){
                [nums[i], nums[break_point]] = [nums[break_point], nums[i]]
                break;
            }
        }
        let reversed: number [] = nums.splice(break_point + 1).reverse()
        nums.push(...reversed)
    }
};