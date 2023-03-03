function runningSum(ar) {
  let outputAr = [ar[0]];
  for (let i = 1; i < ar.length; i++) {
    outputAr.push(ar[i] + outputAr[i - 1]);
  }
  return outputAr;
}

let nums = [3, 1, 2, 10, 1];

console.log(runningSum(nums));

function runningPositiveSum(ar) {
  let start = ar[0];
  let runningSum = 0;
  for (let i = 1; i < ar.length; i++) {
    runningSum += ar[i];
  }
}
// if negative you only need to flip by * -1 ???
// minimum prefix sum?
