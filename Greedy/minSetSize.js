// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const half = arr.length / 2;
  let map = new Map();
  arr.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
  const counts = Array.from(map.values()).sort((a, b) => b - a);
  let aCount = 0;
  removals = 0;
  for (const count of counts) {
    aCount += count;
    removals++;
    if (arr.length - aCount <= half) {
      return removals;
    }
  }
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7], 2));

console.log(minSetSize([7, 7, 7, 7, 7, 7], 1));
