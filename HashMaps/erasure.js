var maximumUniqueSubarray = function (nums) {
  let set = new Set();
  let i = 0,
    j = 0,
    sum = 0,
    max = 0;
  while (i < nums.length && j < nums.length) {
    if (!set.has(nums[j])) {
      set.add(nums[j]);
      sum += nums[j++];
      max = Math.max(sum, max);
    } else {
      set.delete(nums[i]);
      sum -= nums[i++];
    }
  }
  return max;
};

console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
