/*
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi]
indicates that there is an edge between ai and bi in the graph.
Return the number of connected components in the graph.
*/

function countComponents(n, edges) {
  let graph = new Map();

  let seen = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  function dfs(node) {
    for (const neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      seen[i] = true;
      dfs(i);
    }
  }
  return ans;
}

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);

// console.log(
//   countComponents(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );
