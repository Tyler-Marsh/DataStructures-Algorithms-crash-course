// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        asteroids[i] < 0 &&
        Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }

      if (
        stack[stack.length - 1] > 0 &&
        asteroids[i] < 0 &&
        Math.abs(asteroids[i]) < Math.abs(stack[stack.length - 1])
      ) {
        continue;
      }
      if (
        stack[stack.length - 1] > 0 &&
        asteroids[i] < 0 &&
        Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])
      ) {
        stack.pop();
        continue;
      }
    }

    stack.push(asteroids[i]);
  }
  return stack;
};

// why is -7 not destroying 5???
// [-9, 5, -7, 5, 2, -5, -5, 8, 3, 10]

let asts = [
  46, 3, 39, -33, 35, 4, -26, -37, 27, -50, -23, 48, 5, -1, 29, -34, 34, 11, 22,
  8, 41, -20, -10, 17, 35, -14, -9, 3, 12, -13, -47, 23, -39, 25, -43, -2, 26,
  -26, -42, -5, -4, 34, 3, 25, 20, 27, -6,
];

let case1 = [5, 10, -5];
let case2 = [8, -8];
let case3 = [10, 2, -5];
console.log("Expected: [5,10] ", asteroidCollision(case1));

console.log("Expected: [] ", asteroidCollision(case2));

console.log("Expected: [10] ", asteroidCollision(case3));

console.log("Expected: [-2, -2, -2] ", asteroidCollision([-2, -2, 1, -2]));

console.log(
  "Expected: [-9,-7,-5,8,3,10]",
  asteroidCollision([-9, 5, -7, 5, 2, -5, -5, 8, 3, 10])
);

// 23, 45, -67, -23
// 5,10,-5
// Input: asteroids = [10,2,-5]
// Output: [10]

// assuming all positives on the left?

// [46, -36] if prev was pos and
// creating a stack from looping?
// 46 -> skip
// 3, 39, 20, 0, -33 -> loop back
// pop, pop, pop,
// assuming all negatives on the right?
// [
//   46, -36, 3, 39, 20, 10, -33, 35, 4, -26, -37, 27, -50, -23, 48, 5, -1, 29, -34,
//   34, 11, 22, 8, 41, -20, -10, 17, 35, -14, -9, 3, 12, -13, -47, 23, -39, 25,
//   -43, -2, 26, -26, -42, -5, -4, 34, 3, 25, 20, 27, -6,
// ];

// [
//   46, 3, 39, -33, 35, 4, -26, -37, 27, -50, -23, 48, 5, -1, 29, -34,
//   34, 11, 22, 8, 41, -20, -10, 17, 35, -14, -9, 3, 12, -13, -47, 23, -39, 25,
//   -43, -2, 26, -26, -42, -5, -4, 34, 3, 25, 20, 27, -6,
// ];
