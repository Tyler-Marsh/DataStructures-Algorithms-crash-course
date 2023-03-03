// Input: arr = [1,1,3,3,5,5,7,7]

function MatchPlus1(nums) {
  let set = new Set(nums);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total = set.has(nums[i] + 1) ? total + 1 : total;
  }
  return total;
}

console.log(MatchPlus1([1, 1, 3, 3, 5, 5, 7, 7]));
console.log(MatchPlus1([1, 2, 3]));
