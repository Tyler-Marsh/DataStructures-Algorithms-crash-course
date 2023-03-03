// There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.

// The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

// The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

// Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

var maximalNetworkRank = function (n, roads) {
  let uniqueNumbers = new Set();
  if (roads.length === 0) {
  }
  let graph = new Map();

  for (const [x, y] of roads) {
    if (!uniqueNumbers.has(x)) {
      uniqueNumbers.add(x);
    }
    if (!uniqueNumbers.has(y)) {
      uniqueNumbers.add(y);
    }

    if (!graph.has(x)) {
      graph.set(x, []);
    }
    if (!graph.has(y)) {
      graph.set(y, []);
    }
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  let max = 0;
  let innerMax = 0;

  for (const i of uniqueNumbers) {
    for (const j of uniqueNumbers) {
      if (j !== i) {
        innerMax = graph.get(i).length + graph.get(j).length;
        if (graph.get(i).includes(j)) {
          innerMax--;
        }
        max = Math.max(max, innerMax);
      }
    }
  }
  // loop through ALL the combinations

  // double loop to check all the pairs

  // cannot iterate with numbers

  return max;
};

// n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]

//maximalNetworkRank(4, [
//   [0, 1],
//   [0, 3],
//   [1, 2],
//   [1, 3],
// ]);

// maximalNetworkRank(8, [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [2, 4],
//   [5, 6],
//   [5, 7],
// ]);

// maximalNetworkRank(8, [
//   [4, 6],
//   [5, 2],
//   [3, 5],
//   [7, 5],
//   [7, 6],
// ]);

maximalNetworkRank(5, [
  [2, 3],
  [0, 3],
  [0, 4],
  [4, 1],
]);
