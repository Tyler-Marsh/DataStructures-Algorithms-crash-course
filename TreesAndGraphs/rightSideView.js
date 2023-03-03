class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let ans = [root.val];
  let node;
  while (queue.length) {
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      node = queue[i];

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
    if (newQueue.length) {
      ans.push(newQueue[newQueue.length - 1].val);
    }
  }

  return ans;
  //
};

let r = new TreeNode(1);
r.left = new TreeNode(2);
r.left.right = new TreeNode(5);
r.right = new TreeNode(3);
r.right.right = new TreeNode(4);

console.log(rightSideView(r));
