// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

// Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

// Notice that you can return the vertices in any order.

// find the nodes that have an indegree of 0
function findSmallestSetOfVertices(n, edges) {
  // n -1

  // find the smallest  amount of nodes that cannot be reached
  // from other nodes.

  let set = new Set();
  for (let i = 0; i < edges.length; i++) {
    if (!set.has(edges[i][1])) {
      set.add(edges[i][1]);
    }
  }

  let ans = [];
  for (let i = 0; i < n - 1; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }
  return ans;
}

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);

console.log(
  findSmallestSetOfVertices(5, [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ])
);

// output [0,3]

// shortcut in my mind

// create array of n-1 full of true
// convert to false if it is found in the [i][1]

// return the set as an array???
