function partitionArray(nums, k) {
  //   nums.sort((a, b) => a - b);
  //   let count = 0;
  //   let floor = 0;
  //   let subCount = 0;
  //   // 1,2,3   5,6
  //   for (let i = 0; i < nums.length; i++) {
  //     if (!floor) {
  //         floor = nums[i];
  //         count= 1;
  //         continue;
  //     }
  //     if (floor && nums[i] - floor > k) {
  //         subCount++;
  //         floor = nums[i];
  //     }

  //   }

  nums.sort((a, b) => a - b);
  let ans = 1;
  let x = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - x > k) {
      x = nums[i];
      ans++;
    }
  }

  return ans;
}
