// You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

// Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
// Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
// Return the lexicographically smallest string that can be written on the paper.

// bac
// don't truly understand what they want if

//bdda =
// addb
// maybe they mean smallest string possible where
// leading char < following?  abdd is longer than addb...
function robotWithString(s) {
  let p = [];
  let t = [];
  let ss = s.split("");
  t.push(ss.shift());
  while (ss.length || t.length) {
    if (!t.length) {
      t.push(ss[0]);
      ss.shift();
    }
    while (ss.length && t[t.length - 1] >= ss[0]) {
      t.push(ss[0]);
      ss.shift();
    }
    while (t.length) {
      p.push(t.pop());
    }
  }
  return p.join("");
  // keep pushing into t until a greater string comes along
  //
}

//console.log(robotWithString("zza"));
//console.log(robotWithString("bac"));
console.log(robotWithString("bdda"));

// zacadaa
