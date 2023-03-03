// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

function removeStars(s) {
  let stack = [];
  for (const char of s) {
    if (stack.length && char === "*") {
      stack.pop();
      continue;
    }
    stack.push(char);
  }
  return stack.join("");
}

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
