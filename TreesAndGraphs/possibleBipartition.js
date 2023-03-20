/* 
We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.

Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.

*/

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  let graph = new Map();

  for (let i = 1; i < n + 1; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < dislikes.length; i++) {
    let x = dislikes[i][0];
    let y = dislikes[i][1];
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  const BLUE = 1;
  const RED = 0;

  console.log(graph);
  // bi directional graph...
};
possibleBipartition(4, [
  [1, 2],
  [1, 3],
  [2, 4],
]);
