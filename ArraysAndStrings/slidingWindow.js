function slideWindow(numbers, limit) {
  let leftBound = 0;
  let rightBound = 0;
  let theTotal = 0;
  let longestSub = 0;
  let currentSub = 0;

  let sumVal = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumVal = theTotal + numbers[i];
    if (numbers[i] + theTotal <= limit) {
      currentValue = numbers[i];
      rightBound = i === 0 ? 0 : rightBound + 1;
      theTotal += numbers[i];
      currentSub++;
    } else {
      rightBound++;
      theTotal += numbers[i];
      if (currentSub > longestSub) {
        longestSub = currentSub;
      }

      while (theTotal > limit) {
        theTotal -= numbers[leftBound];
        currentSub = rightBound - leftBound;
        leftBound++;
      }
    }
  }
  return longestSub;
}

let nums = [3, 1, 2, 7, 4, 2, 1, 1, 5];
let k = 8;

console.log(slideWindow(nums, k));

var findLength = function (nums, k) {
  let left = 0,
    curr = 0,
    ans = 0;
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

findLength(nums, k);
