var longestSubarray = function (nums, limit) {
  // lowest number at the beginning
  let increasing = [];
  // highest number at the beginning
  let decreasing = [];
  let left = 0,
    ans = 0;

  for (let right = 0; right < nums.length; right++) {
    // maintain the monotonic deques
    while (
      increasing.length &&
      increasing[increasing.length - 1] > nums[right]
    ) {
      increasing.pop();
    }

    while (
      decreasing.length &&
      decreasing[decreasing.length - 1] < nums[right]
    ) {
      decreasing.pop();
    }

    increasing.push(nums[right]);
    decreasing.push(nums[right]);

    // maintain window property
    while (decreasing[0] - increasing[0] > limit) {
      if (nums[left] == decreasing[0]) {
        decreasing.shift();
      }
      if (nums[left] == increasing[0]) {
        increasing.shift();
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

let nums = [10, 1, 2, 4, 7, 2];
let limit = 5;
longestSubarray(nums, limit);
