/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let stack = [];
  let stack2 = [];
  for (const c of s) {
    if (c === "#") {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  for (const b of t) {
    if (b === "#") {
      stack2.pop();
    } else {
      stack2.push(b);
    }
  }
  return stack.join("") === stack2.join("");
};

let s = "ab#c";
let t = "ad#c";

let s1 = "ab##";
let t1 = "c#d#";

let s2 = "a#c";
let t2 = "b";

console.log("Expected: true, actual: ", backspaceCompare(s, t));

console.log("Expected: true, actual: ", backspaceCompare(s1, t1));

console.log("Expected: false, actual:  ", backspaceCompare(s1, t1));
