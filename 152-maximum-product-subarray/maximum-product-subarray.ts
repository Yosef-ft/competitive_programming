function maxProduct(nums: number[]): number {
    let product: number = nums[0];
    let prefix: number = 1;
    let suffix: number = 1;
    let n: number = nums.length;
    
    for(let i =0; i<n; i++){
        if (prefix === 0) prefix =1;
        if (suffix === 0) suffix = 1;
        
        prefix *= nums[i];
        suffix *= nums[n - 1 - i];
        
        product = Math.max(product, Math.max(prefix, suffix));
    }
    return product;
};