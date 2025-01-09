function missingNumber(nums: number[]): number {
    const n: number = nums.length
    const total: number = (n * (n+1)) / 2
    const sumArray: number = nums.reduce(function(x,y){
        return x + y;
    }, 0)

    return total - sumArray;
};