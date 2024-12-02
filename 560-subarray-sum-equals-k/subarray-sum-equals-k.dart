class Solution {
  int subarraySum(List<int> nums, int k) {
    int count = 0;
    int presum = 0;
    Map<int, int> myMap = {0: 1};

    for (int num in nums) {
      presum += num;

      if (myMap.containsKey(presum - k)) {
        count += myMap[presum - k]!;
      }

      myMap[presum] = (myMap.containsKey(presum) ? myMap[presum]! + 1 : 1);
    }

    return count;
  }
}