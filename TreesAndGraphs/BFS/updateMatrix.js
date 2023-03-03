/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// collect all the 0s
// do breadth first search on that queue
function updateMatrix(mat) {
  // let seen = new Array(mat.length);
  let m = mat.length;
  let n = mat[0].length;
  // skip visiting something already visited
  //   for (let i = 0; i < m; i++) {
  //     seen.push(new Array(n).fill(false));
  //   }
  // setting up the array behaves funny
  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }
  let queue = [];

  // visit all nodes collecting all the zeros
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 0) {
        queue.push([row, col]);
        seen[row][col] = true;
      }
    }
  }

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let isValid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] == 1;
  };
  let steps = 0;

  while (queue.length) {
    let currentLength = queue.length;
    let newQueue = [];
    steps++;
    // loop over the queue
    for (let i = 0; i < currentLength; i++) {
      const [row, col] = queue[i];

      for (const [dx, dy] of directions) {
        let nextRow = row + dx;
        let nextCol = col + dy;
        if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
          seen[nextRow][nextCol] = true;
          newQueue.push([nextRow, nextCol]);
          mat[nextRow][nextCol] = steps;
        }
      }
    }
    queue = newQueue;
  }
  return mat;
}

let mat = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

let g = updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]);

console.log(g);
