// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// fewest amount of steps seems like a case for bfs
// especially because it shows a grid with it

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const isValid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] === 1;
  };

  let queue = [];

  let orangesLeft = 0;
  // find all rotten oranges at first
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
        seen[row][col] = true;
      }
      if (grid[row][col] === 1) {
        orangesLeft++;
      }
    }
  }
  if (!orangesLeft) {
    return 0;
  }

  // dfs on the grid
  let steps = 0;
  while (queue.length) {
    let nextQueue = [];
    let queueLength = queue.length;
    steps++;
    for (let i = 0; i < queueLength; i++) {
      let [row, col] = queue[i];
      for (const [dx, dy] of directions) {
        let newRow = row + dx;
        let newCol = col + dy;
        if (isValid(newRow, newCol) && !seen[newRow][newCol]) {
          seen[newRow][newCol] = true;
          nextQueue.push([newRow, newCol]);
          orangesLeft--;
          if (orangesLeft === 0) {
            return steps;
          }
        }
      }
    }
    queue = nextQueue;
  }
  return -1;
};

orangesRotting(
  (grid = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);

orangesRotting((grid = [[0, 2]]));
