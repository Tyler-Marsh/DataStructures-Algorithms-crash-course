function MinSubArray(target, nums) {
  let ans = 1000000;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }
  return ans != 1000000 ? ans : 0;
}
console.log(MinSubArray(7, [2, 3, 1, 2, 4, 3]));
