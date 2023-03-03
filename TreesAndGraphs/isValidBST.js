const TreeNode = require("./TreeNode");

//
function isValidBST(root) {
  // create a recursion function
  // that will determine if it is a legitmate Binary Search Tree

  // left must be smaller
  // right must be greater
  // all data in the left must be smaller
  // all data in the right must be greater

  function DFS(root, small, large) {
    if (!root) {
      return true;
    }
    if (small >= root.val || root.val >= large) {
      return false;
    }
    // when you go left the left value should be smaller than the root
    // root.val = greater
    let left = DFS(root.left, small, root.val);
    // when you go right the right valueshould be smaller than the root
    // root.val should be smaller
    let right = DFS(root.right, root.val, large);
    return left && right;
  }
  return DFS(root, -Infinity, Infinity);
}

let r = new TreeNode(6);
r.left = new TreeNode(1);
r.right = new TreeNode(3);
r.right.left = new TreeNode(4);
r.right.right = new TreeNode(6);

let tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);

console.log(isValidBST(r));
