/* There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] 
denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, 
and no vertex has an edge to itself.
 You want to determine if there is a valid path that exists from vertex source to vertex destination.
 Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, 
 or false otherwise.
*/

function validPath(n, edges, source, destination) {
  // create the graph

  let graph = new Map();
  // set up all nodes in graph
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  // set up all bi-directional edges
  for (const [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  // dfs from the source seeing if we get 5?

  let ans = false;
  let seen = new Array(n).fill(false);
  //   seen[source] = true;
  function dfs(node) {
    for (const neighbor of graph.get(node)) {
      if (neighbor === destination || node === destination) {
        ans = true;
        break;
      }
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  dfs(source);
  return ans;
}

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
