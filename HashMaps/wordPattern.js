// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

function WordPattern(pattern, s) {
  let patternMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.has(pattern[i])) {
      patternMap.set(pattern[i], i + 1);
    }
  }
  console.log(patternMap);
  let ar = [];
  for (const [key, value] of patternMap) {
    ar.push(key);
  }
}

function newWordPattern(s1, s2) {
  let map1 = new Map();
  let map2 = new Map();
  let s2iterable = s2.split(" ");
  for (let i = 0; i < s2.length; i++) {
    if (!map1.has(s1[i]) && !map2.has(s2iterable[i])) {
      map1.set(s1[i], i + 1);
      map2.set(s2iterable[i], i + 1);
    } else if (map1.has(s1[i]) && map2.has(s2iterable[i])) {
      if (map1.get(s1[i]) !== map2.get(s2iterable[i])) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(newWordPattern("abba", "dog cat cat dog"));

console.log(newWordPattern("abba", "dog cat cat fish"));

console.log(newWordPattern("aaaa", "dog cat cat dog"));

console.log(newWordPattern("abca", "dog cat fish dog"));
