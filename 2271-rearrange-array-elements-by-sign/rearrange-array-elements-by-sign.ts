function rearrangeArray(nums: number[]): number[] {
  let pos: number = 0;
  let neg: number = 1;
  let ordered_arr: number [] = new Array(nums.length).fill(0)

  nums.forEach((item) =>{
    if (item > 0){
        ordered_arr[pos] = item
        pos += 2;
    }
    else{
        ordered_arr[neg] = item;
        neg += 2;
    }
  });
  return ordered_arr;
};