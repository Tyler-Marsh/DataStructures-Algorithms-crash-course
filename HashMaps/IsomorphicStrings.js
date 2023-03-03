//  let map1 = new Map();
//Given two strings s and t, determine if they are isomorphic.
//Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

function IsomorphicStrings(s, t) {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  var isIsomorphic = function (s, t) {
    let transform = new Map();
    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
      sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
      tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
      if (!transform.has(s[i])) {
        transform.set(s[i], t[i]);
      }
      if (transform.has(s[i]) && transform.get(s[i]) !== t[i]) {
        return false;
      }
      if (tMap.get(t[i]) !== sMap.get(s[i])) {
        return false;
      }
    }
    return true;
  };
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
  }

  return true;
};

console.log("Expected: false, Actual: ", isIsomorphic("badc", "baba"));
