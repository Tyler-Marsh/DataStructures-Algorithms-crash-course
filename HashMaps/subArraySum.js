var subarraySum = function (nums, k) {
  let counts = new Map();
  counts.set(0, 1);
  let ans = 0,
    curr = 0;

  for (const num of nums) {
    curr += num;
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
};

console.log(subarraySum([1, 2, 1, 2, 1], 3));

console.log(subarraySum([0, 0, 0, 0, 0], 0));
