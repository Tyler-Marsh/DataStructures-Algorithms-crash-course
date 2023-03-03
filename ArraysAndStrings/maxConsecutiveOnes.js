//Given a binary array nums and an integer k,
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 *
 * @param {*} nums binary string
 * @param {*} k limit
 * @return longest number of consecutive ones
 */

function maxConOnes(nums, k) {
  let left = 0,
    count = 0,
    ans = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      count++;
    }

    while (count > k) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}
// I think I would have to save the first flipped index
// then return there to try again

let k = 2;
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];

console.log(maxConOnes(nums, k));
