function prefixSumAltitude(nums) {
  let prev = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    prev += nums[i];
    max = Math.max(prev, max);
  }

  return max;
}

// WORKS
console.log(prefixSumAltitude([-5, 1, 5, 0, -7]));

// //

console.log(prefixSumAltitude([-4, -3, -2, -1, 4, 3, 2]));

console.log(prefixSumAltitude([-1]));

console.log(prefixSumAltitude([2, -5]));

console.log(prefixSumAltitude([100, -5, -30, -100, -30, 1000]));

console.log(prefixSumAltitude([10]));
