function findCircleNum(isConnected) {
  // need to know how many provinces there are

  // or number of conncted circles
  // if there is a 1 that means there is a connection

  function dfs(node) {
    for (const neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  let graph = new Map();
  let n = isConnected.length;
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  // undirected graph it makes sense for 1 to be in the first position
  // it means that 2 can go back to it
  for (let i = 0; i < n; i++) {
    // j = i + 1 because an adjacency matrix means the first node  is the first array
    // we only want to check after that first array
    // so i + 1 is the next one
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        // show they are connected;
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }

  let seen = new Array(n).fill(false);

  // at least 1?
  let ans = 0;

  // at least 1?
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      seen[i] = true;
      dfs(i);
    }
  }
  return ans;
  // now we have to check for each number up  to n
  // does it have any neighbors?
  //
}

let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

let testcase = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
console.log(findCircleNum(testcase));
