function balloonCount(text) {
  let map = new Map();
  let word = { b: true, a: true, l: true, o: true, n: true };

  for (const char of text) {
    if (word[char]) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  map.set("l", Math.floor(map.get("l") / 2));
  map.set("o", Math.floor(map.get("o") / 2));

  let ans = 0;
  if (map.size === 5 && map.get("l") >= 1 && map.get("o") >= 1) {
    ans = map.get("b");
    for (const [min, value] of map) {
      ans = Math.min(ans, value);
    }
  }
  return ans;

  // loop through and see how many baloons an be extracted from
  // the hashmap
}

let text = "loonbalxballpoon";

console.log("Expected: 2, Actual: ", balloonCount(text));

console.log("Expected 1: Actual: ", balloonCount("nlaebolko"));

console.log("Expected 1: Actual: ", balloonCount("balllllllllllloooooooooon"));
