const TreeNode = require("./TreeNode");

var getMinimumDifference = function (root) {
  let dfs = (node) => {
    if (!node) {
      return [];
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    left.push(node.val);
    left.push(...right);
    return left;
  };

  let values = dfs(root);
  let ans = Infinity;
  for (let i = 1; i < values.length; i++) {
    ans = Math.min(ans, values[i] - values[i - 1]);
  }

  return ans;
};

let r = new TreeNode(4);
r.left = new TreeNode(2);
r.right = new TreeNode(6);
r.left.left = new TreeNode(1);
r.left.right = new TreeNode(3);

console.log(getMinimumDifference(r));
