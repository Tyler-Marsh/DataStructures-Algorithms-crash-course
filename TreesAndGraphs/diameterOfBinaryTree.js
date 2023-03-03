// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function (root) {
  let max = 0;
  let diameter = 0;

  function dfs(root) {
    if (root == null) return 0;
    // recursively find the longest path in
    // both left child and right child
    let leftPath = dfs(root.left);
    let rightPath = dfs(root.right);
    // update the diameter if left_path plus right_path is larger
    diameter = Math.max(diameter, leftPath + rightPath);
    // return the longest one between left_path and right_path;
    // remember to add 1 for the path connecting the node and its parent

    // because Math.max we store the longest path. that way if the left side alone has the largest diameter
    // or longest path out of everything then
    // when the new diameter taking a leaf from right side + left side
    return Math.max(leftPath, rightPath) + 1;
  }
  dfs(root, 0);
  return diameter;
};

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// root node not included
let r = new TreeNode(1);
r.left = new TreeNode(1);
r.left.left = new TreeNode(1);
r.left.left.left = new TreeNode(1);
r.left.left.left.left = new TreeNode(1);
r.left.right = new TreeNode(1);
r.left.right.left = new TreeNode(1);
r.left.right.left.left = new TreeNode(1);
r.right = new TreeNode(3);

console.log(diameterOfBinaryTree(root));
// root node included

let f = new TreeNode(1);

f.left = new TreeNode(1);
f.left.left = new TreeNode(1);
f.left.left.left = new TreeNode(1);
f.left.left.left.left = new TreeNode(1);

f.left.right = new TreeNode(1);
f.left.right.left = new TreeNode(1);
f.left.right.left.left = new TreeNode(1);
f.right = new TreeNode(1);
f.right.left = new TreeNode(1);
f.right.left.right = new TreeNode(12);

f.right.right = new TreeNode(7);
