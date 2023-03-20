/* 
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
*/
/**
 *
 * @param {interger array} nums
 * @param {divisor} k
 */
function subArraySumsDivisibleByK(nums, k) {
  // prefix sum?
  // let pre = [];
  // let last = 0;
  // for (let i = 0; i < nums.length; i++) {

  // }
  let n = nums.length;
  let prefixMod = 0;
  let result = 0;

  // There are k mod groups 0...k-1.
  let modGroups = new Array(k).fill(0);
  modGroups[0] = 1;

  for (const num of nums) {
    // Take modulo twice to avoid negative remainders.
    prefixMod = (prefixMod + (num % k) + k) % k;
    // Add the count of subarrays that have the same remainder as the current
    // one to cancel out the remainders.
    result += modGroups[prefixMod];
    modGroups[prefixMod]++;
  }

  return result;
}

// let nums = [4, 5, 0, -2, -3, 1];
// let k = 5;
console.log(subArraySumsDivisibleByK([4, 5, 0, -2, -3, 1], 5));
