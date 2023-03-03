//If graph[i][j] == 1, then put j in the list associated with graph[i]. Both of these approaches will have a time complexity of

let edges = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
];

// this gives you all the connections in a directed graph based on an adjacency matrix
function buildGraph(edges) {
  let graph = new Map();
  for (let i = 0; i < edges.length; i++) {
    if (!graph.has(i)) {
      graph.set(i, []);
    }
    for (let j = 0; j < edges[0].length; j++) {
      if (edges[i][j]) {
        graph.get(i).push(j);
      }
    }
  }
  return graph;
}

let graph = buildGraph(edges);

// from here each index has all of the neighbors quickly available.
