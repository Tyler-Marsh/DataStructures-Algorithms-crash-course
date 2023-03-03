// return a sum of all unique elements in an array
// Only looped 1 time!

function SumUnique(nums) {
  let map = new Map();
  let curr;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    if (!map.has(curr)) {
      map.set(curr, 1);
      total += curr;
    } else if (map.has(curr) && map.get(curr) !== -1) {
      total -= curr;
      map.set(curr, -1);
    }
  }
  return total;
}

console.log(SumUnique([1, 2, 3, 2]));

console.log(SumUnique([1, 1, 1, 1, 1]));

console.log(SumUnique([1, 2, 3, 4, 5]));
