/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let neighbors = (node) => {
    let ans = [];
    for (let i = 0; i < 4; i++) {
      let num = node[i];
      for (const change of [-1, 1]) {
        // + converts it to s number
        // (+ num +change + 10 )% 10
        // + num makes it a number from a string
        // + change alters the number appropriately
        // + 10
        // 9 + 1 = 10 + 10 = 20 % 10 = 0
        // switches to zero successfully

        // 0 + 1 = 1 + 10 == 11 % 10 === 1
        // % modulo ensures 9 + 1 goes to zero
        // the rest get basically 17-10 = 7 so it stays at the number
        // handles the edge case nicely
        let x = (+num + change + 10) % 10;
        // take first letter to the letter it is on
        // take from the number it is on to the numbers after
        ans.push(node.slice(0, i) + x + node.slice(i + 1));
      }
    }

    return ans;
  };

  if (deadends.includes("0000")) {
    return -1;
  }

  let queue = ["0000"];
  let seen = new Set(deadends);
  seen.add("0000");

  let steps = 0;

  while (queue.length) {
    let currentLength = queue.length;
    let nextQueue = [];

    for (let i = 0; i < currentLength; i++) {
      const node = queue[i];
      if (node == target) {
        return steps;
      }

      for (const neighbor of neighbors(node)) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          nextQueue.push(neighbor);
        }
      }
    }

    steps++;
    queue = nextQueue;
  }

  return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
