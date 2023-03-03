function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();

  // set up word frequencies

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }
  // make sure they have all the same words + frequencies
  //   if (!word1Map.keySet().equals(word2Map.keySet())) {
  //     return false;
  // }
  // make sure the have the same keys
  for (const [key, value] of map1) {
    if (!map2.get(key)) {
      return false;
    }
  }
  ar1 = [...map1.entries()].sort((a, b) => a[1] - b[1]);
  ar2 = [...map2.entries()].sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i][1] !== ar2[i][1]) {
      return false;
    }
  }
  return true;
}

console.log("Expected: , Actual ", closeStrings("cabbba", "abbccc"));
