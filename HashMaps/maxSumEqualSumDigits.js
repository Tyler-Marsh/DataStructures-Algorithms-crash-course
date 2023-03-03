//
function maximumSum(nums) {
  let getDigitSum = (num) => {
    let digitSum = 0;
    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    return digitSum;
  };

  let dic = new Map();
  let ans = -1;
  for (const num of nums) {
    let digitSum = getDigitSum(num);
    if (dic.has(digitSum)) {
      ans = Math.max(ans, num + dic.get(digitSum));
    }

    dic.set(digitSum, Math.max(dic.get(digitSum) || 0, num));
  }

  return ans;
}

maximumSum([18, 43, 36, 13, 7, 90]);
