//word = "abcdefd", ch = "d"
/**
 *
 * @param {*} word string
 * @param {*} ch prefix to find and reverse all characters where the string occurs;
 *   IF a prefix exists
 */
function reversePrefix(word, ch) {
  let left = 0;
  let right = 0;
  let ans = word.split("");
  let temp = "";
  if (word.length < 2) {
    return word;
  }
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      right = i;
      while (left < right) {
        ans[left] = word[right];
        ans[right] = word[left];
        left++;
        right--;
      }
      break;
    }
  }
  return ans.join("");
}

// WORKS
//console.log(reversePrefix("abcdefd", "d"));

// INPUT
// rzwuktxcjfpamlonbgyieqdvhs

// CH = z

console.log(reversePrefix("rzwuktxcjfpamlonbgyieqdvhs", "z"));
