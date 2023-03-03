function MaxErasure(nums) {
  let set = new Set();
  let total = 0;
  let max = 0;
  let curr = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    curr = nums[right];

    if (set.has(curr)) {
      while (set.has(curr)) {
        set.delete(nums[left]);
        total -= nums[left];
        left++;
      }
    }
    s.add(curr);
    total += curr;
    max = Math.max(total, max);
  }
  return max;
}

function maximumUniqueSubarray(nums) {
  let result = 0;
  let start = 0;
  let curr;
  let prefixSum = [];
  let lastIndexMap = new Map();
  for (let end = 0; end < nums.length; end++) {
    curr = nums[end];
    prefixSum[end + 1];
  }
}
