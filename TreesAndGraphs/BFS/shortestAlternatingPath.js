/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  let addToGraph = (color, edges) => {
    // set up graph arrays
    for (let i = 0; i < n; i++) {
      graph.get(color).set(i, []);
    }
    // get the map representation of the graph
    // get the key and push its destination
    for (const [x, y] of edges) {
      graph.get(color).get(x).push(y);
    }
  };

  const RED = 0;
  const BLUE = 1;
  let graph = new Map();
  graph.set(RED, new Map());
  graph.set(BLUE, new Map());
  addToGraph(RED, redEdges);
  addToGraph(BLUE, blueEdges);
  let ans = new Array(n).fill(Infinity);
  let queue = [
    [0, RED],
    [0, BLUE],
  ];

  let seen = [];
  // seen arrray to prevent tracking over something twice.
  for (let i = 0; i < n; i++) {
    // 2 bc tracking node and color
    seen.push(new Array(2).fill(false));
  }
  seen[0][RED] = true;
  seen[0][BLUE] = true;
  let steps = 0;

  while (queue.length) {
    let currentLength = queue.length;
    let nextQueue = [];
    for (let i = 0; i < currentLength; i++) {
      let [node, color] = queue[i];
      ans[node] = Math.min(ans[node], steps);
      for (const neighbor of graph.get(color).get(node)) {
        if (!seen[neighbor][1 - color]) {
          seen[neighbor][1 - color] = true;
          nextQueue.push([neighbor, 1 - color]);
        }
      }
    }
    queue = nextQueue;
    steps++;
  }

  for (let i = 0; i < n; i++) {
    if (ans[i] === Infinity) {
      ans[i] = -1;
    }
  }
  return ans;
};

// /*
let redEdges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];
let blueEdges = [
  [1, 2],
  [2, 3],
  [3, 1],
];

//shortestAlternatingPaths(8, redEdges, blueEdges);

shortestAlternatingPaths(3, [[0, 1]], [[2, 1]]);
//output: [0,1,2,3,7]
//*/

// in a directed graph

// we want to return an array
// answer[i] is the length of the shortest path from 0 to i
// alternating colors
// -1 if the path doesn't exist
