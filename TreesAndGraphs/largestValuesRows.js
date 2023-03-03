const TreeNode = require("./TreeNode");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  let ans = [root.val];
  let queue = [root];
  let tempMax = -Infinity;
  let node;
  while (queue.length) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      node = queue[i];
      if (node.left) {
        tempMax = Math.max(tempMax, node.left.val);
        newQueue.push(node.left);
      }

      if (node.right) {
        tempMax = Math.max(tempMax, node.right.val);
        newQueue.push(node.right);
      }
    }
    if (tempMax !== -Infinity) {
      ans.push(tempMax);
    }
    tempMax = -Infinity;
    queue = newQueue;
  }
  return ans;
};

let r = new TreeNode(1);
r.left = new TreeNode(3);
r.left.left = new TreeNode(5);
r.left.right = new TreeNode(3);
r.right = new TreeNode(2);
r.right.right = new TreeNode(9);

console.log(largestValues(r));
