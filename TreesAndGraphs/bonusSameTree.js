const TreeNode = require("./TreeNode");

//Given the roots of two binary trees p and q, write a function to check if they are the same or not.

//Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // dfs is quicker so try that
  // base case take care of when they don't exist
  if (!p && q) {
    return false;
  }

  if (!q && p) {
    return false;
  }
  if (!p && !q) {
    return true;
  }
  if (p?.val !== q?.val) {
    return false;
  }
  const dfs = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (p && !q) {
      return false;
    }
    if (!q && p) {
      return false;
    }
    // values have to be the same
    if (p?.val !== q?.val) {
      return false;
    }
    return dfs(p.left, q.left) && dfs(p.right, q.right);
  };

  return dfs(p.left, q.left) && dfs(p.right, q.right);
};

// same tree test case
let q = new TreeNode(1);
let q1 = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);
q1.left = new TreeNode(2);
q1.right = new TreeNode(3);

//console.log("Expected: true, actual: ", isSameTree(q, q1));

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(1);

let p1 = new TreeNode(1);
p1.left = new TreeNode(1);
p1.right = new TreeNode(2);

//console.log("Expected: false, actual: ", isSameTree(p, p1));

p = [1];
q = [1, null, 2];

let n = new TreeNode(1);
let n1 = new TreeNode(1);
n1.left = null;
n1.right = new TreeNode(2);

//console.log("Expected: false, actual: ", isSameTree(n, n1));

let r = new TreeNode(3);
r.left = new TreeNode(2);
r.right = null;
r.left.left = null;
r.left.right = new TreeNode(1);

let r1 = new TreeNode(3);
r1.left = new TreeNode(2);
r1.right = null;
r1.left.left = null;
r1.left.right = new TreeNode(1);

console.log("Expected: true, actual:  ", isSameTree(r, r1));
