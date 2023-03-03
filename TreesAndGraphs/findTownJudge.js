// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// find the node  with indegree of n-1
// node must also have outdegree of 0

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// n
var findJudge = function (n, trust) {
  if (trust.length === 0) {
    if (n === 1) {
      return 1;
    }
    return -1;
  }

  if (trust.length === 1) {
    return trust[0][1];
  }
  let graph = new Map();
  for (const [x, y] of trust) {
    if (!graph.has(x)) {
      graph.set(x, []);
    }
    if (!graph.has(y)) {
      graph.set(y, []);
    }
    graph.get(x).push(y);
  }

  // loop over an objects keys

  let theKey = 0;
  let possibleJudges = new Map();
  for (const [key, value] of graph) {
    if (value.length === 0) {
      possibleJudges.set(key, 0);
      theKey = key;
    }
  }
  if (possibleJudges.size !== 1) {
    return -1;
  }

  // should be n-1
  let count = 0;
  for (const [key, value] of graph) {
    if (value.includes(theKey)) {
      count++;
    }
  }

  if (count === n - 1) {
    return theKey;
  }

  return -1;
  // once I know there are no judges in any of these

  // should have all of the nodes and a directed graph

  // the judge should be empty
  // I can collect an array of empty nodes

  // check the rest of the graph to see if they have them
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);

console.log(
  findJudge(
    (n = 3),
    (trust = [
      [1, 3],
      [2, 3],
      [3, 1],
    ])
  )
);
