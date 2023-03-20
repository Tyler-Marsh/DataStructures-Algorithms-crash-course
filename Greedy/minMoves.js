// You are playing a game with integers. You start with the integer 1 and you want to reach the integer target.

// In one move, you can either:

// Increment the current integer by one (i.e., x = x + 1).
// Double the current integer (i.e., x = 2 * x).
// You can use the increment operation any number of times, however, you can only use the double operation at most maxDoubles times.

// Given the two integers target and maxDoubles, return the minimum number of moves needed to reach target starting with 1.

/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  let moves = 0;
  let curr = target;
  while (curr > 1) {
    if (curr % 2 === 0 && maxDoubles) {
      maxDoubles--;
      curr = curr / 2;
      moves++;
      continue;
    } else if (maxDoubles == 0) {
      return moves + curr - 1;
    } else {
      curr--;
      moves++;
      continue;
    }
  }
  return moves;
};

console.log(minMoves(19, 2));
// Input: target = 19, maxDoubles = 2
// Output: 7
