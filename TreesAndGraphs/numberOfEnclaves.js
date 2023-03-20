// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let connectsToEdge = false;
  let count = 0;
  let ans = 0;
  // don't need a graph if i workoff seen array
  let m = grid.length;
  let n = grid[0].length;

  const valid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] === 1;
  };

  const borders = (row, col) => {
    return 0 === row || row === m - 1 || col === 0 || col === n - 1;
  };

  let directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }
  const dfs = (row, col) => {
    let count = 0;
    if (borders(row, col)) {
      connectsToEdge = true;
    }

    for (const [dx, dy] of directions) {
      let newRow = dx + row;
      let newCol = dy + col;
      if (valid(newRow, newCol) && !seen[newRow][newCol]) {
        seen[newRow][newCol] = true;
        count++;
        if (borders(newRow, newCol)) {
          connectsToEdge = true;
        }
        count += dfs(newRow, newCol);
      }
    }
    return count;
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      count = 0;
      connectsToEdge = false;
      if (valid(row, col) && !seen[row][col]) {
        seen[row][col] = true;
        count++;
        count += dfs(row, col);
        if (!connectsToEdge) {
          ans += count;
        }
      }
    }
  }
  return ans;
  // I can make a graph and traverse in each direction.
  // count number of islands found
  // once they are found dfs
  // after dfs if border  === false then
  // add those to the answer
};

let grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

console.log(numEnclaves(grid));

console.log(
  numEnclaves(
    (grid = [
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ])
  )
);
