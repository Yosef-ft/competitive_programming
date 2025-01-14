class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        break_point = -1
        n = len(nums)

        for i in range(n -2, -1, -1):
            if nums[i] < nums[i+1]:
                break_point = i
                break

        if break_point == -1:
            nums.reverse()

        else:
            for i in range(n -1, break_point, -1):
                if nums[i] > nums[break_point]:
                    nums[i], nums[break_point] = nums[break_point], nums[i]
                    break

            nums[break_point+1:] = reversed(nums[break_point+1:])