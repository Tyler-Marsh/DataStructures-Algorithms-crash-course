function erasureTwoPointer(nums) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let total = 0;
  let max = 0;
  while (left < nums.length && right < nums.length) {
    if (!set.has(nums[right])) {
      set.add(nums[right]);
      total += nums[right];
      right++;
      max = Math.max(total, max);
    } else {
      set.delete(nums[left]);
      total -= nums[left];
      left++;
    }
  }
  return max;
}

console.log(erasureTwoPointer([5, 2, 1, 2, 5, 2, 1, 2, 5]));
