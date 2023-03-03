/**
 * @param {string} s
 * @return {string}
 */

/* 
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
We repeatedly make duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
*/
var removeDuplicates = function (s) {
  let stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] == c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};

let s = "abbaca";
console.log("Expected: ca, Actual: ", removeDuplicates(s));
