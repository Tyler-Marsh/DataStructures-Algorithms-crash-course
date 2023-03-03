const TreeNode = require("./TreeNode");

function insertIntoBST(root, val) {
  if (root == null) return new TreeNode(val);

  // insert into the right subtree
  if (val > root.val) root.right = insertIntoBST(root.right, val);
  // insert into the left subtree
  else root.left = insertIntoBST(root.left, val);
  return root;
}

let f = new TreeNode(40);
f.left = new TreeNode(20);
f.left.left = new TreeNode(10);
f.left.right = new TreeNode(30);
f.right = new TreeNode(60);
f.right.left = new TreeNode(50);
f.right.right = new TreeNode(70);

let g = insertIntoBST(f, 25);
console.log(g);
