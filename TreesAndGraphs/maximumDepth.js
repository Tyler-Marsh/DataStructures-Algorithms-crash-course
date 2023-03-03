/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // assume the function black box works

  function dfs(node, num) {
    //assume the black box function works
    if (!node) {
      return 0;
    }

    let right = dfs(node.right, num);
    let left = dfs(node.left, num);
    return Math.max(right, left) + 1;
  }

  return dfs(root, 0);
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
let rr = root.right;
rr.left = new TreeNode(15);
rr.right = new TreeNode(7);

console.log(maxDepth(root));
