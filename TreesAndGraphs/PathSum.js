function hasPathSum(root, targetSum) {
  // start by writing recursion as black box
  // assume it works

  function hasPath(node, curr) {
    // base case of a leaf reaching for a null node
    if (!node) {
      return false;
    }

    // base case if the target sum is reached..
    if (!node.left && !node.right) {
      return curr + node.val === targetSum;
    }

    curr += node.val;

    let left = hasPath(node.left, curr);
    let right = hasPath(node.right, curr);
    return left || right;
  }

  return hasPath(root, 0);
}

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(5);

/* LEFT SIDE  */
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.right = new TreeNode(2);
root.left.left.left = new TreeNode(7);

/* RIGHT SIDE  */
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

console.log(hasPathSum(root, 22));
