/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
  const set = new Set();
  if (finalSum % 2) {
    return [];
  }
  let ans = [];
  largestNumber = 2;
  while (finalSum > 0) {
    // if it is larger
    if (set.has(finalSum - largestNumber)) {
      largestNumber += 2;
      continue;
    }

    if (largestNumber * 2 === finalSum) {
      ans.push(largestNumber * 2);
      return ans;
    }
    finalSum -= largestNumber;
    set.add(largestNumber);
    ans.push(largestNumber);
    largestNumber += 2;
    // if it is 2x then must use a bigger number

    // start with 24
    // 22  -> 2
    // 18 -> 4
    // 12 -> 6
    // 12 -> 12

    // 12
    // 10
    // 6
    // 0

    // 28
    // 26
    // 22
    // 16
    // how do we know to skip 8 because you can't have two 8s???
  }
  return ans;
};

console.log(maximumEvenSplit(28));
console.log(maximumEvenSplit(12));
// Input: finalSum = 12
// Output: [2,4,6]

/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplitFaster = function (finalSum) {
  const res = [];
  if (finalSum % 2) return res;
  let prev = 0;
  while (prev < finalSum - (prev + 2)) {
    prev += 2;
    finalSum -= prev;
    res.push(prev);
  }
  if (finalSum > prev) res.push(finalSum);
  else if (finalSum === prev) res[res.length - 1] += prev;
  return res;
};

var maximumEvenSplitFasterMine = function (finalSum) {
  const ans = [];
  if (finalSum % 2) return ans;
  let num = 0;
  while (num < finalSum - (num + 2)) {
    num += 2;
    finalSum -= num;
    ans.push(num);
  }
  if (finalSum > num) ans.push(num);
  else if (finalSum === num) ans[ans.length - 1] = num + num;
  return ans;
};

console.log(maximumEvenSplitFaster(28));
console.log(maximumEvenSplitFaster(12));
