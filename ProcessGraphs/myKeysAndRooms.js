// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

function canVisitAllRooms(rooms) {
  let seen = new Set();
  // first rooom is guaranteed to get inside
  seen.add(0);
  // "graph" only exists as an idea
  // so pass the reference node to the function
  function dfs(node) {
    for (const neighbor of rooms[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
  }
  dfs(0);
  return seen.size === rooms.length;

  // loop over??
}

let rooms = [[1], [2], [3], []];
let rooms1 = [[1, 3], [3, 0, 1], [2], [0]];

console.log(canVisitAllRooms(rooms));

console.log(canVisitAllRooms(rooms1));
