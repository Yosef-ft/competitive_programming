class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        vote = 0
        candidate = -1

        for i in range(len(nums)):
            if vote == 0:
                candidate = nums[i]
                vote = 1

            else:
                if candidate == nums[i]:
                    vote += 1
                else:
                    vote -= 1

        
        count = 0

        for i in range(len(nums)):
            if candidate == nums[i]:
                count +=1


        if count > (len(nums)//2):
            return candidate
        else:
            return -1