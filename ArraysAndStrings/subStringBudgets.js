function subStringBudgets(s, t, maxCost) {
  let start = 0;
  let runningCost = 0;
  let currNum = 0;
  let maxChanges = 0;

  for (let end = 0; end < s.length; end++) {
    runningCost += Math.abs(s[end].charCodeAt(0) - t[end].charCodeAt(0));
    currNum++;
    if (runningCost > maxCost) {
      while (runningCost > maxCost) {
        runningCost -= Math.abs(
          s[start].charCodeAt(0) - t[start].charCodeAt(0)
        );
        start++;
        currNum--;
      }
    }

    maxChanges = Math.max(maxChanges, currNum);
  }
  return maxChanges;
}

// WORKS
console.log("EXPECTED: 3: ACTUAL: ", subStringBudgets("abcd", "bcdf", 3));

// WORKS
console.log("EXPECTED: 1 ACTUAL: ", subStringBudgets("abcd", "cdef", 3));

// WORKS
console.log("EXPECTED 1: ACTUAL: ", subStringBudgets("abcd", "acde", 0));

console.log("EXPECTED: 2: ACTUAL: ", subStringBudgets("krrgw", "zjxss", 19));

console.log(
  "EXPECTED 1: ACTUAL: ",
  subStringBudgets("anryddgaqpjdw", "zjhotgdlmadcf", 5)
);
