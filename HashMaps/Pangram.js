/* 
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/
function isPangram(s) {
  let set = new Set();
  let curr;
  for (let i = 0; i < s.length; i++) {
    curr = s[i];
    if (!set.has(curr)) {
      set.add(curr);
    }
  }
  return set.size === 26;
}

console.log(
  "Expected: true, actual: ",
  isPangram("thequickbrownfoxjumpsoverthelazydog")
);
console.log("Expected: false, actual: ", isPangram("dkjfeoifd"));
