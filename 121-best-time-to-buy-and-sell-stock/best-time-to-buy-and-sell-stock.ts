function maxProfit(prices: number[]): number {
    let diff: number = 0
    let mini: number = prices[0]
    let ans: number = 0

    prices.forEach((item) =>{
        diff = item - mini;
        if (diff < 0) mini = item;
        ans = Math.max(ans, diff)
    });

    return ans;
};