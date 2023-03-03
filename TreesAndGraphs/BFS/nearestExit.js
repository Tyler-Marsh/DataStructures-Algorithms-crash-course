// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

function nearestExit(maze, entrance) {
  // breadth first will count how many steps

  const isValid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && maze[row][col] === ".";
  };

  // the entrance doesn't count as the exist

  // we are at an exit if we are in the top or bottom row
  // or we are at the left most or right most column
  // entrance can' t count
  const detectborder = (row, col) => {
    if (row === entrance[0] && col === entrance[1]) {
      return false;
    }
    return row === m - 1 || row === 0 || col === n - 1 || col === 0;
  };
  // i need queue

  // no moves can be used
  let queue = [entrance];
  queue[0][2] = 0;
  let seen = [];
  let m = maze.length;
  let n = maze[0].length;
  for (let i = 0; i < m; i++) {
    // infinity so the next step will always be smaller
    // storing how many steps in the seen array
    // infinity = not been seen yet
    seen.push(new Array(n).fill(Infinity));
  }

  let directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  // this problem doesn't need a graph perse
  let steps = 0;
  while (queue.length) {
    let nextQueue = [];
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      // gett the row  , col, and steps
      let row = queue[i][0];
      let col = queue[i][1];
      let steps = queue[i][2];
      if (detectborder(row, col)) {
        return steps;
      }
      // detect a border in a 2d array

      // loop over each possible direction
      for (const [dx, dy] of directions) {
        let newRow = row + dx;
        let newCol = col + dy;
        // don't go to a space if visited previously with less steps to get there
        // I should be storing the amount of steps to get there
        // need to track the number of steps

        if (isValid(newRow, newCol) && seen[newRow][newCol] > steps + 1) {
          seen[newRow][newCol] = steps + 1;
          nextQueue.push([newRow, newCol, steps + 1]);
        }
      }
    }
    steps++;
    queue = nextQueue;
  }
  return -1;
}

let maze = [
  ["+", "+", ".", "+"],
  [".", ".", ".", "+"],
  ["+", "+", "+", "."],
];
let entrance = [1, 2];

console.log(nearestExit(maze, entrance));

console.log(
  nearestExit(
    [
      ["+", "+", "+"],
      [".", ".", "."],
      ["+", "+", "+"],
    ],
    [1, 0]
  )
);

console.log(nearestExit([[".", "+"]], [0, 0]));
