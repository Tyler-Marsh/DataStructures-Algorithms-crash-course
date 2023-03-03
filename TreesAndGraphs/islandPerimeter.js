/* You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). 
The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. 
Determine the perimeter of the island.

*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let edgesToPerimeter = { 0: 4, 1: 3, 2: 2, 3: 1, 4: 0 };

  // need to traverse in all 4 directions to find neighbors?
  let m = grid.length;
  let n = grid[0].length;
  const valid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] === 1;
  };

  // double loop and count neighbors at each location?

  let edges = 0;
  let permimeter = 0;
  for (let row = 0; row < m; row++) {
    // triple loop
    for (let col = 0; col < n; col++) {
      // check for other sides
      edges = 0;
      if (grid[row][col]) {
        if (valid(row - 1, col)) {
          edges++;
        }
        if (valid(row + 1, col)) {
          edges++;
        }
        if (valid(row, col - 1)) {
          edges++;
        }
        if (valid(row, col + 1)) {
          edges++;
        }
        permimeter += edgesToPerimeter[edges];
      }
    }
    // edges = 0;
  }
  return permimeter;
  // input is an adjacency matrix
};

// add edges based on sides / corners???

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);

// 0

console.log(islandPerimeter([[1]]));

console.log(islandPerimeter([[1, 0]]));
