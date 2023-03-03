//[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]

//You are given an integer array matches where matches[i] = [winneri, loseri]
//indicates that the player winneri defeated player loseri in a match.

//Return a list answer of size 2 where:
//answer[0] is a list of all players that have not lost any matches.
//answer[1] is a list of all players that have lost exactly one match.

// each loss == 1?
function subMatches(matches) {
  let map = new Map();
  let winner;
  let loser;
  for (const match of matches) {
    winner = match[0];
    loser = match[1];
    if (!map.has(winner)) {
      map.set(winner, 0);
    }
    map.set(loser, (map.get(loser) || 0) + 1);
  }

  let answer = [[], []];
  for (const [key, value] of map) {
    if (value === 0) {
      answer[0].push(key);
    } else if (value === 1) {
      answer[1].push(key);
    }
  }
  answer[0].sort((a, b) => a - b);
  answer[1].sort((a, b) => a - b);
  return answer;
}

let ans = subMatches([
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
]);

console.log(ans);
