/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let changed = false;
  let nums = num.toString().split("");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "6" && !changed) {
      nums[i] = "9";
      changed = true;
    }
  }
  return parseInt(nums.join(""));
};

console.log(maximum69Number(9669));
// Input: num = 9669
// Output: 9969

// Input: num = 9996
// Output: 9999
