class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
// if a node has NO children it is a leaf node
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.
function minDepth(root) {
  let min = Infinity;
  if (!root) {
    return 0;
  }
  function dfs(root, depth) {
    if (!root) {
      return min;
    }

    depth += 1;
    if (!root.left && !root.right) {
      min = Math.min(min, depth);
      return min;
    }

    let left = dfs(root.left, depth);
    let right = dfs(root.right, depth);
    return min;
  }

  return dfs(root, 0);
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
//root.left.left = new TreeNode(5);
// wrong answer because9 has 1 child
//root.left.right = new TreeNode(11);

//console.log(minDepth(root));

console.log(minDepth(new TreeNode(1)));
