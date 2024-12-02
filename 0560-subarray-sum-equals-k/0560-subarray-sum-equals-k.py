class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count =0
        presum = 0
        my_dict = {0:1}
        
        for num in nums:
            presum += num
            
            if presum - k in my_dict:
                count += my_dict[presum - k]
                
            my_dict[presum] = my_dict.get(presum, 0) + 1
        
        return count