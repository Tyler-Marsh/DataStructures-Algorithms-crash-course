//Input: nums = [5,7,3,9,4,9,8,3,1]

function largestUnique(nums) {
  //
  let map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let ans = -1;

  for (const [key, value] of map) {
    if (key > ans && value === 1) {
      ans = key;
    }
  }
  return ans;
}

console.log(largestUnique([5, 7, 3, 9, 4, 9, 8, 3, 1]));

console.log(largestUnique([8, 8, 9, 9]));
