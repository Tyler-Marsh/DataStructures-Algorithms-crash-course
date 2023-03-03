/* 
[1,7,3,6,5,6]
*/

// [1,8,11,17,22,28]
//

// left most pivot index...

function PivotIndex(nums) {
  let prefix = [nums[0]];
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    prefix[i] = cur;
  }

  if (prefix[0] === prefix[prefix.length - 1]) {
    return 0;
  } else if (
    prefix[prefix.length - 1] === prefix[prefix.length - 2] &&
    nums[nums.length - 1] !== 0
  ) {
    return 0;
  }

  let left;
  let right;

  for (let j = 1; j < nums.length; j++) {
    left = prefix[j - 1];
    right = prefix[prefix.length - 1] - left - nums[j];
    if (left === right) {
      return j;
    }
  }
  return -1;
}

console.log("Expected: 2, Actual", PivotIndex([-1, -1, -1, -1, -1, 0]));
