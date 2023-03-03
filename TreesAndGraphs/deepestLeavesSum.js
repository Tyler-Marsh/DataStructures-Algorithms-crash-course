const TreeNode = require("./TreeNode");

//Given the root of a binary tree, return the sum of values of its deepest leaves.
/**
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
  // find the last row?
  // then loop and sum?
  // they recommend doing it twice but if I just find the last row I can loop once to get sum

  let queue = [root];
  let sum = 0;
  let node;
  while (queue.length) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      node = queue[i];
      sum += node.val;
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
    if (queue.length === 0) {
      break;
    }
    sum = 0;
  }
  return sum;
}

let r = new TreeNode(1);
r.left = new TreeNode(2);
r.left.left = new TreeNode(4);
r.left.left.left = new TreeNode(7);
r.left.right = new TreeNode(5);

r.right = new TreeNode(3);
r.right.right = new TreeNode(6);
r.right.right.right = new TreeNode(8);

console.log(deepestLeavesSum(r));
console.log(deepestLeavesSum(new TreeNode(1)));
