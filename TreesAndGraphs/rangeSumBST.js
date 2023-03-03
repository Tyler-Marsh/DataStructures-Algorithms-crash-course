//
//
//
//Given the root node of a binary search tree and two integers low and high,
//return the sum of values of all nodes with a value in the inclusive range [low, high].
const TreeNode = require("./TreeNode");
var rangeSumBST = function (root, low, high) {
  if (!root) {
    return null;
  }

  let ans = 0;
  if (low <= root.val && root.val <= high) {
    ans += root.val;
  }

  if (low < root.val) {
    ans += rangeSumBST(root.left, low, high);
  }
  if (root.val < high) {
    ans += rangeSumBST(root.right, low, high);
  }
  return ans;
};

let r = new TreeNode(10);
r.left = new TreeNode(5);
r.right = new TreeNode(15);
r.left.left = new TreeNode(3);
r.left.right = new TreeNode(7);

r.right.right = new TreeNode(18);

console.log(rangeSumBST(r, 7, 15));
