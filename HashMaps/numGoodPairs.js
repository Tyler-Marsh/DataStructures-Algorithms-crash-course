function numGoodPairs(nums) {
  let cMap = new Map();
  let count = 0;
  let curr;
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    if (cMap.has(curr)) {
      count += cMap.get(curr);
      cMap.set(curr, cMap.get(curr) + 1);
    } else {
      cMap.set(curr, 1);
    }
  }
  return count;
}

console.log("Expected: 4, Actual: ", numGoodPairs([1, 2, 3, 1, 1, 3]));

console.log("Expceted: 6, Actual: ", numGoodPairs([1, 1, 1, 1]));

console.log("Expected: 0, Actual: ", numGoodPairs([1, 2, 3]));

/* ALTERNATIVE */
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let store = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        store++;
      }
    }
  }
  return store;
}; /* 

*/
