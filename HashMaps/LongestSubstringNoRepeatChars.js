function LongestSubstring(s) {
  let counts = new Map();
  let left = 0;
  let ans = 0;
  let curr = "";
  for (let right = 0; right < s.length; right++) {
    curr = s[right];
    counts.set(curr, (counts.get(curr) || 0) + 1);
    if (counts.get(curr) && counts.get(curr) > 0) {
      while (counts.get(curr) > 1) {
        counts.set(s[left], counts.get(s[left]) - 1);
        left++;
      }
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}

console.log("Expected: 3, Actual: ", LongestSubstring("pwwkew"));
