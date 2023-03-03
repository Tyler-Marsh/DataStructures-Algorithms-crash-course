function vowelSubString(s, k) {
  let ans = 0;
  let left = 0;
  let vowelCount = 0;
  let right = k - 1;

  let vowels = { a: true, e: true, i: true, o: true, u: true };

  for (let i = 0; i < k; i++) {
    if (vowels[s[i]]) {
      vowelCount++;
    }
  }
  if (k + 1 >= s.length) {
    return vowelCount;
  }

  let next;
  let prev;
  let it = 0;
  let leftPlaceholder = 0;
  while (right < s.length) {
    vowelCount = 0;
    leftPlaceholder = left;

    while (it < k) {
      if (vowels[s[leftPlaceholder]]) {
        vowelCount++;
      }
      leftPlaceholder++;
      it++;
    }
    it = 0;

    ans = Math.max(ans, vowelCount);
    right++;
    left++;
  }

  return ans;
}
console.log("EXPECTED 2 ACTUAL: ", vowelSubString("leetcode", 3));

console.log("EXPECTED 2 ACTUAL: ", vowelSubString("aeiou", 2));

console.log("EXPECTED 3: ACTUAL: ", vowelSubString("abciiidef", 3));

console.log(vowelSubString("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33));

console.log(
  vowelSubString("ovkrzjmplhcloojfjrccmrscwqqhaackfyorqpzekrzvpynqpmgkqd", 48)
);
