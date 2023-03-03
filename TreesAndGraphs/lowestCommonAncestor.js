class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

//Given the root of a binary tree and two nodes p and q that are in the tree, return the
//lowest common ancestor (LCA) of the two nodes. The LCA is the lowest node in the tree
//that has both p and q as descendants (note: a node is a descendant of itself).
function lowestCommonAncestor(root, p, q) {
  // handle base cases

  if (!root) {
    return null;
  }

  if (q === root || root === p) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  if (left) {
    return left;
  }
  return right;
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

root.right = new TreeNode(1);
root.right.right = new TreeNode(8);
root.right.left = new TreeNode(0);

//console.log(lowestCommonAncestor(root, root.left, root.right));

console.log(lowestCommonAncestor(root, root.left, root.left.right.right));
