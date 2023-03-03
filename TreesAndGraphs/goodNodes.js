class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

//Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
//Return the number of good nodes in the binary tree.

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  // keep a maxNumber to find out how many are good?
  function dfs(node, maxSoFar) {
    // what are the edge cases?
    let current = 0;
    if (!node) {
      return 0;
    }
    maxSoFar = Math.max(node.val, maxSoFar);
    if (!node.right && !node.left) {
      return maxSoFar <= node.val ? 1 : 0;
    }
    let left = dfs(node.left, maxSoFar);
    let right = dfs(node.right, maxSoFar);
    if (maxSoFar <= node.val) {
      current++;
    }
    // where does left + right return a value???
    return left + right + current;
    // they return the count;
  }

  return dfs(root, root.val);
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.right = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.left = new TreeNode(1);

console.log(goodNodes(root));

let root2 = new TreeNode(3);
root2.left = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(2);

console.log(goodNodes(root2));

console.log(goodNodes(new TreeNode(1)));
