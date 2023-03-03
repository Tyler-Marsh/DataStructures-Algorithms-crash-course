//Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

function LargestLuckyInteger(nums) {
  let count = {};
  let largest = -1;
  let curr;
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    if (!count[curr]) {
      count[curr] = 1;
    } else {
      count[curr] = count[curr] + 1;
    }
  }

  for (const [key, value] of Object.entries(count)) {
    if (parseInt(key) === value && value > largest) {
      largest = value;
    }
  }
  return largest;
}

console.log("Expected: 2, acutal: ", LargestLuckyInteger([2, 2, 3, 4]));

// Input: arr = [2,2,3,4]
// Output: 2

console.log("Expected: 3, actual: ", LargestLuckyInteger([1, 2, 2, 3, 3, 3]));

console.log("Expected: -1, actual: ", LargestLuckyInteger([2, 2, 2, 3, 3]));
