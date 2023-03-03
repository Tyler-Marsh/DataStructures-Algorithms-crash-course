// uses extra space tho
var deepestLeavesSum = function (root, depth = 0, sum = []) {
  if (!root) {
    return;
  }
  sum[depth] = (sum[depth] || 0) + root.val;
  deepestLeavesSum(root.left, depth + 1, sum);
  deepestLeavesSum(root.right, depth + 1, sum);
  return sum[sum.length - 1];
};
