function zerosAtEnd(nums) {
  let left = 0;
  let right = nums.length;
  let addToEnd = 0;
  while (left < right) {
    if (nums[left] === 0) {
      nums.splice(left, 1);
      addToEnd++;
      right--;
    }
    if (nums[left] !== 0) {
      left++;
    }
  }
  while (addToEnd) {
    nums.push(0);
    addToEnd--;
  }
}

console.log(zerosAtEnd([0, 0, 1]));

console.log(zerosAtEnd([0, 1, 0, 3, 12]));
