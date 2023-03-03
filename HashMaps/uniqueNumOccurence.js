// [1,2,2,1,1,3]

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
function uniqueOccurences(arr) {
  let occurences = new Map();
  let curr;
  for (let i = 0; i < arr.length; i++) {
    curr = arr[i];
    occurences.set(curr, (occurences.get(curr) || 0) + 1);
  }

  let unique = new Set();
  for (entry of occurences.entries()) {
    if (unique.has(entry[1])) {
      return false;
    }
    unique.add(entry[1]);
  }
  return true;
}

console.log("Expected: true, Actual: ", uniqueOccurences([1, 2, 2, 1, 1, 3]));

console.log("Expected: false, Actual: ", uniqueOccurences([1, 2]));

console.log(
  "Expected: true, Actual: ",
  uniqueOccurences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])
);
