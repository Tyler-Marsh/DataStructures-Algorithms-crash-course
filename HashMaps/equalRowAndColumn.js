function equalRowAndColumn(grid) {
  let rowMap = new Map();
  let rowString = "";
  for (let i = 0; i < grid.length; i++) {
    rowString = grid[i].join(" ");
    rowMap.set(rowString, (rowMap.get(rowString) || 0) + 1);
  }

  let colMap = new Map();
  for (let col = 0; col < grid[0].length; col++) {
    let currentCol = [];
    for (let row = 0; row < grid.length; row++) {
      currentCol.push(grid[row][col]);
    }
    let colString = currentCol.join(" ");
    colMap.set(colString, (colMap.get(colString) || 0) + 1);
  }

  let ans = 0;
  for (const [key, val] of rowMap) {
    ans += val * colMap.get(key) || 0;
  }

  return ans;
}

let grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

console.log(
  equalRowAndColumn([
    [11, 1],
    [1, 11],
  ])
);
