//   Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

let islands = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

function numIslands(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let seen = [];
  // copy array of same dimensions
  // fill with false bc each area is not seen
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function isValid(row, col) {
    // have to make sure the indexing doesn't go outside the array
    // first make sure row is in bounds
    // second make sure col is in bounds
    // third make sure the grid item is 1
    return (
      0 <= row && row < m && 0 <= col && col <= n && grid[row][col] === "1"
    );
  }

  function dfs(row, col) {
    // now have to check all others
    for (const [dx, dy] of directions) {
      row += dx;
      col += dy;
      if (isValid(row, col) && !seen[row][col]) {
        seen[row][col] = true;
        dfs(row, col);
      }
    }
  }

  let ans = 0;
  // double loop over the grid to see what is what?
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // check here
      // if 1 (land) & seen in copy tracking array is false
      if (grid[row][col] === "1" && !seen[row][col]) {
        ans++;
        seen[row][col] = true;
        dfs(row, col);
      }
    }
  }
  return ans;
}
let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
