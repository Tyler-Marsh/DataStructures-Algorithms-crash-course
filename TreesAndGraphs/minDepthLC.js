function MinDepth(root) {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  let min_depth = Infinity;
  if (root.left != null) {
    min_depth = Math.min(MinDepth(root.left), min_depth);
  }
  if (root.right != null) {
    min_depth = Math.min(MinDepth(root.right), min_depth);
  }

  return min_depth + 1;
}
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(MinDepth(root));
