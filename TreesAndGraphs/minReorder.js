function minReorder(n, connections) {
  // I need to reverse the order of all
  // then see if there are matches in the original

  function dfs(node) {
    let ans = 0;
    /* 
     [1, 0], [1, 2], [3, 2], [3, 4],
    */
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
  }

  // store nodes
  let roads = new Set();
  // create the graph
  let graph = new Map();

  // track if we have visited nodes
  let seen = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  // return a hashable value
  function convertToHash(x, y) {
    return x + "," + y;
  }
  // convert to undirected graph
  for (const [x, y] of connections) {
    graph.get(x).push(y);
    graph.get(y).push(x);
    roads.add(convertToHash(x, y));
  }

  seen[0] = true;
  return dfs(0);

  // how will I reverse the roads man?
}

// let connections = [
//   [0, 1],
//   [1, 3],
//   [2, 3],
//   [4, 0],
//   [4, 5],
// ];
let connections = [
  [1, 0],
  [1, 2],
  [3, 2],
  [3, 4],
];

console.log(minReorder(6, connections));
