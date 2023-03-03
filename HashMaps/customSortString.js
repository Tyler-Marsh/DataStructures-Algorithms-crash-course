// Input: order = "cbafg", s = "abcd"
// Output: "cbad"
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.
function customSortString(order, s) {
  //   let set = new Set(order);
  // Count the letters in "s"
  let myMap = new Map();

  for (const c of s) {
    if (!myMap.has(c)) {
      myMap.set(c, 0);
    }
    const count = myMap.get(c);
    myMap.set(c, count + 1);
  }
  // Output the letters in "s" in the order given by "order"
  const answer = [];
  for (const c of order) {
    const count = myMap.get(c);
    for (let i = 0; i < count; ++i) {
      answer.push(c);
    }
    myMap.delete(c);
  }

  // Output the letters in "s" which dont appear in "order"
  for (const [c, count] of myMap.entries()) {
    const count = myMap.get(c);
    for (let i = 0; i < count; ++i) {
      answer.push(c);
    }
  }

  return answer.join("");

  // Outp
  // if we gt a p
  // thinking about
}

function myCustomSortString(order, s) {
  let map = new Map();

  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  const ans = [];
  let orderCount = 0;
  for (const char of order) {
    orderCount = map.get(char);
    if (orderCount === undefined) {
      map.delete(char);
      continue;
    }
    for (let i = 0; i < orderCount; i++) {
      ans.push(char);
    }
    map.delete(char);
  }

  for (const [c, count] of map.entries()) {
    const count = map.get(c);
    for (let j = 0; j < count; j++) {
      ans.push(c);
    }
  }
  return ans.join("");
}
console.log("Expected: kqeep , Actual: ", myCustomSortString("kqep", "pekeq"));
