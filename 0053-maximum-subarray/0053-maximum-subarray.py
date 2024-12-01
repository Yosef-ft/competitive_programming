class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum = 0
        max_num = nums[0]
        for item in nums:
            sum += item
            max_num = max(sum, max_num)
            if sum < 0:
                sum = 0

        return max_num
    