/*
There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. You are also given an integer array restricted which represents restricted nodes.
Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.
Note that node 0 will not be a restricted node.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  // make the graph
  let graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  let restrictedOb = {};
  for (let i = 0; i < restricted.length; i++) {
    restrictedOb[restricted[i]] = true;
  }

  let ans = 1;
  let seen = new Array(n - 1).fill(false);
  function dfs(node) {
    let answer = 0;
    for (const neighbor of graph.get(node)) {
      if (restrictedOb[neighbor] && !seen[neighbor]) {
        seen[neighbor] = true;
        continue;
      }
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        answer++;
        answer += dfs(neighbor);
      }
    }
    return answer;
  }
  let a = dfs(0);
  if (a === 0) {
    return 1;
  }
  return a;
};

console.log(
  "expected: 4, actual: ",
  reachableNodes(
    7,
    [
      [0, 1],
      [1, 2],
      [3, 1],
      [4, 0],
      [0, 5],
      [5, 6],
    ],
    [4, 5]
  )
);

console.log(
  "Expected 3, actual: ",
  reachableNodes(
    7,
    [
      [0, 1],
      [0, 2],
      [0, 5],
      [0, 4],
      [3, 2],
      [6, 5],
    ],
    [4, 2, 1]
  )
);
