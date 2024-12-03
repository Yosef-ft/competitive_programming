class Solution {
  int maxProduct(List<int> nums) {
    int product = nums[0];
      int prefix = 1;
      int suffix = 1;
      int n = nums.length;
      
      for(int i=0; i<n; i++){
          if (prefix == 0) prefix = 1;
          if (suffix == 0) suffix = 1;
          
          prefix *= nums[i];
          suffix *= nums[n - i - 1];
          
          int max_num = prefix > suffix ? prefix : suffix;
          product = product > max_num ? product : max_num;
      }
      return product;
  }
}