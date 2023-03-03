//Given an integer array nums, return true if any
//value appears at least twice in the array, and return false
//if every element is distinct.

function ContainsDuplicate(nums) {
  let dupeMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    dupeMap.set(nums[i], (dupeMap.get(nums[i]) || 0) + 1);
    if (dupeMap.get(nums[i]) > 1) {
      return true;
    }
  }
  return false;
}
