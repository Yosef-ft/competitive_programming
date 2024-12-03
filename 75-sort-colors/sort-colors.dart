class Solution {
  void sortColors(List<int> nums) {
    int low =0;
      int mid = 0;
      int high = nums.length -1;
      
      while (mid <= high){
          
          if (nums[mid] == 0){
              int temp = nums[mid];
              nums[mid] = nums[low];
              nums[low] = temp;
              low +=1 ;
              mid += 1;
          }
          
          else if(nums[mid] == 1) mid +=1;
          
          else{
              int temp = nums[mid];
              nums[mid] = nums[high];
              nums[high] = temp;
              high -=1;
          }
      }
  }
}