function BinarySubarraysSum(nums, goal) {
  let prefix = new Map();
  prefix.set(0, 1);
  let curr = 0;
  let count = 0;

  for (const num of nums) {
    curr += num;
    count += prefix.get(curr - goal) || 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
  }
  return count;
}

console.log("Expected: 4, Actual: ", BinarySubarraysSum([1, 0, 1, 0, 1], 2));

console.log("Expected: 15, Actual: ", BinarySubarraysSum([0, 0, 0, 0, 0], 0));
