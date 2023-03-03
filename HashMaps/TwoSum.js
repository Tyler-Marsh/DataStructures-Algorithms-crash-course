//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function TwoSum(nums, target) {
  let map = new Map();
  let dif;
  for (let i = 0; i < nums.length; i++) {
    dif = target - nums[i];
    if (map.has(dif)) {
      return [map.get(dif), i];
    }
    map.set(nums[i], i);
  }
  return null;
}

console.log("Expected: 0,1 actual: 0,1", TwoSum([2, 7, 11, 15], 9));

console.log("Expected: 1, 2: actual: ", TwoSum([3, 2, 4], 6));

console.log("Expected: 0,1 actual: ", TwoSum([3, 3], 6));
