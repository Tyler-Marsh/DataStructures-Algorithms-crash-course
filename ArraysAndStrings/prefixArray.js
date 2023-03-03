/**
 * @param {number[]} nums
 * @return {number}
 */
function waysToSplitArray(nums) {
  let ans = 0,
    leftSection = 0,
    total = 0;
  for (const num of nums) {
    total += num;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    leftSection += nums[i];
    let rightSection = total - leftSection;
    if (leftSection >= rightSection) {
      ans++;
    }
  }

  return ans;
}

// calculate the i-th number in the running sum from the (i-1) number ?

var waysToSplitArray = function (nums) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let leftSection = prefix[i];
    let rightSection = prefix[prefix.length - 1] - prefix[i];
    if (leftSection >= rightSection) {
      ans++;
    }
  }

  return ans;
};

function minPrefixArray(nums) {
  let prefix = [nums[0]];

  let minimum = nums[0];
}

function mySolution(nums) {
  let prefix = [nums[0]];
  let smallestValue = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
    smallestValue = prefix[i] < smallestValue ? prefix[i] : smallestValue;
  }
  // if positive vs negative
  if (smallestValue <= 0) {
    smallestValue = smallestValue * -1;
    smallestValue++;
    return smallestValue;
  } else {
    return 1;
  }
}

let nums = [-3, 2, -3, 4, 2];
console.log(mySolution(nums));
