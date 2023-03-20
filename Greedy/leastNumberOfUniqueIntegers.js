/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
      continue;
    }
    map.set(arr[i], map.get(arr[i]) + 1);
  }
  map = new Map([...map].sort((a, b) => a[1] - b[1]));

  // have the map
  // iterating over the sortMap may present a problem if I keep deleting from it
  let firstValue;
  let firstKey;
  for (let i = 0; i < k; i++) {
    [firstKey, firstValue] = map.entries().next().value;
    map.set(firstKey, firstValue - 1);
    if (map.get(firstKey) == 0) {
      map.delete(firstKey);
    }
  }

  return map.size;
  // sort keys on frequency
};

findLeastNumOfUniqueInts([5, 5, 4], 1);

// must be brutally slow whereas array are fast
// map.entries.next().value -->
// map.set()
// if (map.get() ==0) {
//    }

var fasterFindLeastNumOfUniqueInts = function (arr, k) {
  let map = new Map();
  arr.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
  const counts = Array.from(map.values()).sort((a, b) => a - b);
  let uniqueCount = counts.length;
  for (const count of counts) {
    if (k >= count) {
      k -= count;
      uniqueCount--;
    } else {
      break;
    }
  }
  return uniqueCount;
};
