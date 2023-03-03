//Given an array of integers temperatures represents the daily temperatures,
//return an array answer such that answer[i] is the number of days you have to wait after
//the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let answer = new Array(temperatures.length).fill(0);
  let j;
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      j = stack.pop();
      answer[j] = i - j;
    }

    stack.push(i);
  }
  return answer;
};

let temperatures = [34, 33, 32, 31, 30, 50];

console.log(dailyTemperatures(temperatures));
