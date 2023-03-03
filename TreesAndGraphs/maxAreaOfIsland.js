/* You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally 
(horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // number of nodes Y axis
  let m = grid.length;
  // length of inner arrays X axis
  let n = grid[0].length;
  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }
  function isValid(row, col) {
    let valid =
      row >= 0 && row < m && col >= 0 && col < n && grid[row][col] === 1;
    return valid;
  }

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (row, col) => {
    for (const [dx, dy] of directions) {
      let nextRow = row + dy,
        nextCol = col + dx;
      if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        currCount++;
        ans = Math.max(currCount, ans);
        dfs(nextRow, nextCol);
      }
    }
  };

  let ans = 0;
  let currCount = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      currCount = 0;
      if (grid[row][col] === 1 && !seen[row][col]) {
        seen[row][col] = true;
        currCount++;
        ans = Math.max(currCount, ans);
        dfs(row, col);
      }
    }
  }

  return ans;
};

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);

// make validaiton function
