function MissingNum(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for (let j = 0; j <= nums.length; j++) {
    if (!set.has(j)) {
      return j;
    }
  }
}

console.log(MissingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(MissingNum([0, 1]));
