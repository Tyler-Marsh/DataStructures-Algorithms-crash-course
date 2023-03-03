//Given a string s, sort it in decreasing order based on the frequency of the characters.
//The frequency of a character is the number of times it appears in the string.
//Return the sorted string. If there are multiple answers, return any of them.

function sortCharByFrequency(s) {
  let charMap = new Map();
  let curr;
  for (let i = 0; i < s.length; i++) {
    curr = s[i];
    charMap.set(curr, (charMap.get(curr) || 0) + 1);
  }

  let order = [];
  let numLetters = charMap.size;
  // loop over and get the amounts, can be an array of sizes?

  // have an object. iterate over an put into an array.
  // sort the array
  // then while loop + loop to get it all together
  const sortedMap = new Map(
    [...charMap.entries()].sort((a, b) => {
      return b[1] - a[1];
    })
  );
  let stringAr = [];
  let whileNum = 0;
  for (let [key, value] of sortedMap) {
    whileNum = value;
    while (whileNum > 0) {
      stringAr.push(key);
      whileNum--;
    }
  }
  return stringAr.join("");
}

//
console.log("expected: eetr, actual: ", sortCharByFrequency("tree"));
