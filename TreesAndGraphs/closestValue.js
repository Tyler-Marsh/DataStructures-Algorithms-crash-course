const TreeNode = require("./TreeNode");

//Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

// root = [4,2,5,1,3], target = 3.714286

function closestValue(root, target) {
  if (!root) {
    return root;
  }
  let closest = root.val;
  let min = Math.abs(root.val - target);
  function dfs(root, l) {
    // as a black box
    if (!root) {
      return;
    }

    if (Math.abs(root.val - target < min)) {
      closest = root.val;
    }
    min = Math.min(min, Math.abs(root.val - target));
    if (target < root.val) {
      dfs(root.left, val);
    }
    if (target > root.val) {
      dfs(root.right, target);
    }
  }
  dfs(root, target);
  return closest;
}
let r = new TreeNode(4);
r.left = new TreeNode(2);
r.right = new TreeNode(5);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(3);

console.log(closestValue(r, 3.714286));
