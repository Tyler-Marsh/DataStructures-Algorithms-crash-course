/* 
Given a string s of lower and upper case English letters.
A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
Notice that an empty string is also good.
*/
function makeGood(s) {
  let oldLength = s.length;
  let newLength = s.length;
  let currString = s;
  let stack = [s[0]];
  let firstLoop = true;

  if (s.length < 2) {
    return s;
  }

  do {
    oldLength = newLength;
    if (!firstLoop) {
      stack = [currString[0]];
    }
    for (let i = 1; i < currString.length; i++) {
      if (currString[i].toLowerCase() === currString[i]) {
        if (currString[i].toUpperCase() === stack[stack.length - 1]) {
          oldLength--;
          stack.pop();
          continue;
        }
      }
      if (currString[i].toUpperCase() === currString[i]) {
        if (currString[i].toLowerCase() === stack[stack.length - 1]) {
          oldLength--;
          stack.pop();
          continue;
        }
      }
      stack.push(currString[i]);
    }
    newLength = stack.length;
    currString = stack.join("");
    firstLoop = false;
  } while (oldLength !== newLength);
  // must change curr string
  return stack.join("");
}

// maybe a do while loop doesn't work like I wanted

// check out why oldLength might not be equal to new length;
// is there another way I want to do it

console.log(makeGood("leEeetcode"));

console.log("response: ", makeGood("abBAcC"));

// lol what
// returns soo
console.log(makeGood("so"));

console.log("should be nothing ", makeGood("sSoO"));
/* 
Input: s = "leEeetcode"
Output: "leetcode"
*/

/* 
Input: s = "abBAcC"
Output: ""
*/
