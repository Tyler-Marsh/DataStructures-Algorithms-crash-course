/* Nested for loop
1. loop over to find the start and end of a word.
2. while loop to  two pointers it to find where the word starts and ends.
3. account for spacing 
*/

// God Ding
var reverseWords = function (s) {
  let startWord = 0;
  let endWord = 0;
  let ans = [];

  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === " ") {
      endWord = i - 1;
      while (endWord >= startWord) {
        ans.push(s[endWord]);
        endWord--;
      }

      if (i !== s.length) {
        ans.push(" ");
      }

      startWord = i + 1;
    }
  }
  return ans.join("");
};

//reverseWords("God Ding");

var LCreverse = function (s) {
  //     while (startIndex < endIndex) {
  //         char temp = chArray[startIndex];
  //         chArray[startIndex] = chArray[endIndex];
  //         chArray[endIndex] = temp;
  //         startIndex++;
  //         endIndex--;
  // }
  let lastSpaceIndex = -1;
  let startIndex;
  let endIndex;
  let temp;
  let temp1;
  let ans = s.split("");
  for (let strIndex = 0; strIndex <= s.length; strIndex++) {
    if (strIndex == s.length || s.charAt(strIndex) === " ") {
      startIndex = lastSpaceIndex + 1;
      endIndex = strIndex - 1;
      while (startIndex < endIndex) {
        temp = ans[startIndex];
        temp1 = ans[endIndex];
        ans[startIndex] = temp1;
        ans[endIndex] = temp;
        startIndex++;
        endIndex--;
      }
      lastSpaceIndex = strIndex;
    }
  }
  return ans.join("");
};

console.log(LCreverse("God Ding"));
