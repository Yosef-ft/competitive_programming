class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        pos = 0
        neg = 1
        ordered_arr = [0] * len(nums)
        for item in nums:
            if item > 0:
                ordered_arr[pos] = item
                pos +=2 
            else:
                ordered_arr[neg] = item
                neg += 2

        return ordered_arr