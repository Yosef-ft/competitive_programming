/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n: number = nums.length
    k %= n

    nums = nums.reverse()
    reverseSubArray(nums, 0, k -1)
    reverseSubArray(nums, k, n -1)

    function reverseSubArray(arr: number[], start: number, end: number): void{
        while(start < end){
            let temp: number = arr[start]
            arr[start] = arr[end]
            arr[end] = temp

            start++;
            end--;
        }
    }
};