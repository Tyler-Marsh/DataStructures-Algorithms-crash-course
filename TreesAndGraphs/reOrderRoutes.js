function minReorder(n, connections) {
  let convertToHash = (row, col) => {
    return row + "," + col;
  };

  let dfs = (node) => {
    let ans = 0;
    for (const neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        if (roads.has(convertToHash(node, neighbor))) {
          ans++;
        }
        seen[neighbor] = true;
        ans += dfs(neighbor);
      }
    }
    return ans;
  };

  // set of roads
  let roads = new Set();
  let graph = new Map();
  // seen array
  let seen = new Array(n).fill(false);
  // build graph frame
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  // fill out graph
  for (const [x, y] of connections) {
    graph.get(x).push(y);
    graph.get(y).push(x);
    // roads are simply the connectionst that already exist
    roads.add(convertToHash(x, y));
  }
  seen[0] = true;
  // where are the reversed roads coming from?
  return dfs(0);
}

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
);
