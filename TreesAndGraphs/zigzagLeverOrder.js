const TreeNode = require("./TreeNode");
/*Given the root of a binary tree, return the zigzag level order traversal of its nodes' 
values. (i.e., from left to right, then right to left for the next level and alternate between).
*/
function zigzagLevelOrder(root) {
  if (!root) {
    return [];
  }
  let ans = [];
  let reverse = false;
  let queue = [root];
  let currArr = [];
  let node;
  while (queue.length) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      node = queue[i];
      if (reverse) {
        currArr.unshift(node.val);
      } else {
        currArr.push(node.val);
      }

      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    ans.push(currArr);
    currArr = [];
    queue = newQueue;
    reverse = !reverse;
  }
  return ans;
}

let r = new TreeNode(3);
r.left = new TreeNode(9);
r.right = new TreeNode(20);
r.right.left = new TreeNode(15);
r.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(r));

console.log(zigzagLevelOrder(new TreeNode(1)));
