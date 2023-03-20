// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// all even letters + largest odd

function longestPalindrome(s) {
  // add up the even numbered counts
  // plus largest odd
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const counts = Array.from(map.values()).sort((a, b) => b - a);

  let oddTaken = false;
  let longest = 0;
  for (const count of counts) {
    if (!(count % 2)) {
      longest += count;
    } else if (count % 2 && !oddTaken) {
      longest += count;
      oddTaken = true;
    } else {
      longest += count - 1;
    }
  }
  return longest;
}
/*
@shashankr_19 same here too, i latter figure out that the will be time where odd value will be more than one, imagine having {a:3,c:3,f:2}. we have odd that appears 3 times and we can pick 2 a's and 2 c's wiith all the even number. you need to tweak your implementation which i did and my code works perfectly now
*/

// Input: s = "abccccdd"
// Output: 7

console.log("Expcted: 7, Actual: ", longestPalindrome("abccccdd"));
