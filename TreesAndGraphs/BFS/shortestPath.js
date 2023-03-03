/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  // x 1 = right
  // -1 = left

  // y   1 = down
  // -1 = up

  let m = grid.length;
  let n = grid[0].length;
  let queue = [[0, 0, k]];
  let seen = [];
  // putting [-1,-1]
  for (let i = 0; i < m; i++) {
    seen.push([]);
    for (let j = 0; j < n; j++) {
      seen[i].push(-1);
    }
  }

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let steps = 0;

  const valid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n;
  };

  while (queue.length) {
    let newQueue = [];
    let queueLength = queue.length;
    // iterate over the queue
    //
    for (let i = 0; i < queueLength; i++) {
      // now that we are iterating over each item
      // need need to know if there is an 1
      let [row, col, remain] = queue[i];
      if (row == m - 1 && col == n - 1) {
        return steps;
      }
      if (grid[row][col] === 1) {
        if (remain === 0) {
          continue;
        } else {
          remain--;
        }
      }
      if (seen[row][col] >= remain) {
        continue;
      }
      seen[row][col] = remain;
      for (const [dx, dy] of directions) {
        let newRow = row + dx;
        let newCol = col + dy;
        if (valid(newRow, newCol)) {
          newQueue.push([newRow, newCol, remain]);
        }
      }
    }
    queue = newQueue;
    steps++;
  }
  return -1;
};

let grid = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 0],
];
let k = 1;
// expected = 6;

console.log(shortestPath(grid, 2));

console.log(
  shortestPath(
    [
      [0, 1, 1],
      [1, 1, 1],
      [1, 0, 0],
    ],
    2
  )
);
