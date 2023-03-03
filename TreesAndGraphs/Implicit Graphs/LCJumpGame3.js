function canReach(arr, start) {
  if (0 <= start && start < arr.length && arr[start] >= 0) {
    if (arr[start] == 0) {
      return true;
    }
    arr[start] = -arr[start];
    return (
      canReach(arr, start + arr[start]) || canReach(arr, start - arr[start])
    );
  }

  return false;
}

canReach([0], 0);
let s = 0 <= 0 < 1 && 0 >= 0;
// console.log(s);
// DFS is similar to BFS but differs in the order of searching. You should consider DFS when you think of BFS.

// Still, we make the value negative to mark as visited.
// in place mutation mark it as visited
// only have to reach a destination one time if recursively call on both options
