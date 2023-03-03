// track the maximum number
// track maximum diff ??

// Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

// A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

// For each subtree, find the minimum value and maximum value of its descendants.
var maxAncestorDiff = function (root) {
  function dfs(root, maxSoFar, minSoFar) {
    if (!root) {
      return 0;
    }
    maxSoFar = Math.max(root.val, maxSoFar);
    minSoFar = Math.min(root.val, minSoFar);
    let diff = Math.abs(maxSoFar - minSoFar);

    let left = dfs(root.left, maxSoFar, minSoFar);
    let right = dfs(root.right, maxSoFar, minSoFar);
    return Math.max(diff, right, left);
  }
  return dfs(root, root.val, root.val);
};

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(0);
root.right.right.left = new TreeNode(3);

let r = new TreeNode(8);
r.left = new TreeNode(3);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(6);
r.left.right.left = new TreeNode(4);
r.left.right.right = new TreeNode(7);
r.right = new TreeNode(10);
r.right.right = new TreeNode(14);
r.right.right.right = new TreeNode(13);

console.log(maxAncestorDiff(root));
