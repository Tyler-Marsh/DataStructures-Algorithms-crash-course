//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

//Each letter in magazine can only be used once in ransomNote.

function ransomNote(note, magazine) {
  // ransomNote = "aa", magazine = "aab"

  // loop to fill hashmap with the magazine letters

  let lettersMap = new Map();
  let curr = "";
  for (let i = 0; i < magazine.length; i++) {
    curr = magazine[i];
    lettersMap.set(curr, (lettersMap.get(curr) || 0) + 1);
  }
  // while loop subtracting from magazine going through ransome
  let count = 0;
  while (count < note.length) {
    if (!lettersMap.has(note[count]) || lettersMap.get(note[count]) < 1) {
      return false;
    }
    lettersMap.set(note[count], lettersMap.get(note[count]) - 1);
    count++;
  }
  return true;
}

console.log(ransomNote("aa", "aab"));

console.log(
  ransomNote("okay here it is", "aodsjfoqwpeituoapifsldkfbndfaligherapogih  ")
);

console.log(ransomNote("withspaces", "spaceswithesspaces"));

console.log(ransomNote("iwillrunout", "iwilrunout"));
