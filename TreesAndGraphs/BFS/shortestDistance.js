/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let buildingsLocations = new Set();

  const hash = (row, col) => {
    return `${row},${col}`;
  };

  // get the 1s in a queue;
  let queue = [];
  // must be infinity
  // make a set hashed to any building or obstacle
  // for quick lookup?

  // use seen

  let buildNo = 0;
  for (let i = 0; i < n; i++) {}
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // location of the ones
      if (grid[row][col] !== 0) {
        buildingsLocations.add(hash(row, col));
      }
      if (grid[row][col] === 1) {
        queue.push([row, col, buildNo]);
        buildNo++;
      }
    }
  }
  // no land space
  if (queue.length === 0) {
    return -1;
  }
  let seen = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n));
    for (let j = 0; j < n; j++) {
      seen[i][j] = new Array(buildNo);
    }
  }

  // each spot in the sub sub array denotes a total?
  // store locations for manhattan formula
  let locations = queue;

  // might have to change depending on when I increment the step
  const isValid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] === 0;
  };

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let steps = 1;
  while (queue.length) {
    let nextQueue = [];
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      // for each direction
      let row = queue[i][0];
      let col = queue[i][1];
      let bNo = queue[i][2];

      for (const [dx, dy] of directions) {
        let newRow = row + dx;
        let newCol = col + dy;
        // if it is completely blocked???
        if (isValid(newRow, newCol) && !seen[newRow][newCol][bNo]) {
          nextQueue.push([newRow, newCol, bNo]);
          seen[newRow][newCol][bNo] = steps;
        }
      }
    }
    queue = nextQueue;
    steps++;
    // after looping
  }

  // now hella nested loop to count everything???

  // what about a seen and a running total???
  // how would I keep track of a running total??
  // keep a set to make sure??
  // this would probably take way to long to calculate

  let ans = Infinity;
  let temp = 0;
  // forEach forEach sum?
  console.log(seen);
  console.log(seen[0]);
  console.log(seen[0][0]);
  console.log(seen[0][0][1]);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (parseInt(seen[i][j][0])) {
        temp = seen[i][j].reduce();
        //temp = seen[i][j].reduce(add, 0);
        ans = Math.min(temp, ans);
      }
    }
  }

  //   function add(accumulator, a) {
  //     if (a === undefined) {
  //       return -Infinity;
  //     }
  //     return a + accumulator;
  //   }

  if (ans == Infinity || ans == -Infinity) {
    return -1;
  }
  return ans;
  // const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
  // omg see what is left after this
};

// see will have to be an X dimensional array
// where X is the number of buildings

let grid = [
  [1, 0, 2, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

// shortestDistance(grid);

// shortestDistance([[1, 0]]);

shortestDistance([
  [1, 1],
  [0, 1],
]);
