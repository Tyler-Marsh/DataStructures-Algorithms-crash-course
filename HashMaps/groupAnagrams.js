//
function groupAnagrams(strs) {
  // add sorted to the list then increment
  let groups = new Map();
  let key;
  for (const str of strs) {
    key = str.split("").sort().join();
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }

  let ans = [];
  // now I have keys grouped to arrays;
  for (const [key, value] of groups) {
    ans.push(value);
  }
  return ans;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
