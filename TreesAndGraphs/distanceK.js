/* 
Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const TreeNode = require("./TreeNode");
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

// target comes directly from the element in memory
function distanceK(root, target, k) {
  //
  function dfs(node, parent) {
    if (!node) {
      return;
    }
    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, parent);
  }

  dfs(root, null);

  let queue = [target];
  let distance = 0;
  let seen = new Set([target]);
  while (queue.length && distance < k) {
    let currentLength = queue.length;
    let nextQueue = [];
    for (let i = 0; i < currentLength; i++) {
      let node = queue[i];
      for (const neighbor of [node.left, node.right, node.parent]) {
        if (neighbor && !seen.has(neighbor)) {
          seen.add(neighbor);
          nextQueue.push(neighbor);
        }
      }
    }
    queue = nextQueue;
    distance++;
  }
  return queue.map((node) => node.val);
}

let root1 = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
let k = 2;

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

let target = root.left;

console.log(distanceK(root, target, 2));
