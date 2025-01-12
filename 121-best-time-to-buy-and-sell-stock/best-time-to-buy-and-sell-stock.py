class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        diff = 0
        mini = prices[0]
        ans = 0

        for item in prices:
            diff = item - mini
            if diff < 0:
                mini = item
            ans = max(ans, diff)

        return ans
    