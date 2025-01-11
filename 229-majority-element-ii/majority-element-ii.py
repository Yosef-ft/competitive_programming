class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        my_dict = {}
        size = floor(len(nums) / 3)
        ans = []

        for item in nums:
            if item not in my_dict:
                my_dict[item] = 1
            else:
                my_dict[item] +=1

        for key, value in my_dict.items():
            if value > size:
                ans.append(key)
            
        return ans

