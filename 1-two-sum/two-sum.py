class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        my_dict = {}
        answer = []

        for i, item in enumerate(nums):
            if target - item in my_dict:
                answer.append(i)
                answer.append(my_dict[target-item])
            else:
                my_dict[item] = i

        return answer