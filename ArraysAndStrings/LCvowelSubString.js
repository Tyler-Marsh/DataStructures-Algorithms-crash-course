/// loop through once.

function SlideWindowVowels(s, k) {
  let vowels = { a: true, e: true, i: true, o: true, u: true };
  let maxCount = 0;
  let left = 0; // the left edge of the window
  let count = 0; // count of vowels for current substring

  for (let right = 0; end < s.length; right++) {
    if (vowels[s[left]]) {
      count += 1;
    }

    if (right - left + 1 > k) {
      if (vowels(s[left])) {
        count -= 1;
      }

      left += 1;
    }

    maxCount = Math.max(maxCount, count);
    if (maxCount === k) {
      return maxCount;
    }
  }
  return maxCount;
}

console.log(SlideWindowVowels("abciiidef", 3));
