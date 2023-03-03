function numIslands(grid) {
  let valid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col <= n && grid[row][col] == "1";
  };
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(row, col) {
    for (const [dx, dy] of directions) {
      let nextRow = row + dy,
        nextCol = col + dx;
      if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        dfs(nextRow, nextCol);
      }
    }
  }

  // number of nodes Y axis
  let m = grid.length;
  // length of inner arrays X axis
  let n = grid[0].length;
  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  let ans = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === "1" && !seen[row][col]) {
        ans++;
        seen[row][col] = true;
        dfs(row, col);
      }
    }
  }
  return ans;
}

let islands = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(islands));

let islands2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(islands2));
