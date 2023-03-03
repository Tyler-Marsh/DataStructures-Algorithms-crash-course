//You are given an integer array nums consisting of n elements, and an integer k.

//Find a contiguous subarray whose length is equal to k that has
//the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

function findMaxAverage(nums, k) {
  // equal to K
  // this means a fixed sub Array

  // to find a fixed sub array???
  // start at the first sub array

  let cur = 0;
  let total = 0;
  let curAvg = 0;

  let left = 0;
  let right = 0;

  for (let i = 0; i < k; i++) {
    cur += nums[i];
  }
  curAvg = cur / k;
  let ans = curAvg;

  for (let i = k; i < nums.length; i++) {
    cur += nums[i] - nums[i - k];
    curAvg = cur / k;
    ans = Math.max(curAvg, ans);
  }

  return ans;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
