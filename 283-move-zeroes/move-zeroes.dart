class Solution {
  void moveZeroes(List<int> nums) {
    int x = 0;
      for (int i = 0; i< nums.length; i++){
          if (nums[i] != 0){
              int temp = nums[i];
              nums[i] = nums[x];
              nums[x] = temp;
              
              x +=1;
          }
      }
  }
}