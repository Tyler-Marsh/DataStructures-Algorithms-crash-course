function TwoLetters(chars) {
  let map = new Map();
  let curr;
  for (let i = 0; i < chars.length; i++) {
    curr = chars[i];
    if (map.has(curr)) {
      return curr;
    }
    map.set(curr, i);
  }
  return null;
}

console.log(TwoLetters("acdikddk"));
