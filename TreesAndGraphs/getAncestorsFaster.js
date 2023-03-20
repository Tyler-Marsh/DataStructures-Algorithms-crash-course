/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
/* 
You are given a positive integer n representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive).
You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there is a unidirectional edge from fromi to toi in the graph.
Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in ascending order.
A node u is an ancestor of another node v if u can reach v via a set of edges.
*/
// return an array filled with the number of indegrees they have plus their parents have
// make sure it is properly sorted afterwards/ or during

// previous attempt was too slow
// created a memoization approach to return the results of memo[node]
var getAncestors = function (n, edges) {
  // make a graph
  let inDegrees = new Map();
  for (let i = 0; i < n; i++) {
    inDegrees.set(i, []);
  }

  // memoization to save computing time
  const memo = new Set();
  const dfs = (node) => {
    if (node.length === 0) {
      return [];
    }
    // loop through a bunch
    if (!memo[node]) {
      memo[node] = new Set();
      // for in vs
      // for of
      // so far only finds the direct parents
      for (const parent of inDegrees.get(node)) {
        // spread operator adds [] to the set...???
        //  memo[node].add([...dfs(parent)]);
        //  memo[node].add(dfs(parent));

        for (const val of dfs(parent)) {
          if (!isNaN(val)) {
            memo[node].add(val);
          }
        }
        memo[node].add(parent);
      }
      // what needs to happen???
      //

      /// it needs to return
      // if the node isn't in the list then...
    }
    return memo[node];
  };
  // loop through array of edges
  // directed acyclic
  for (const [x, y] of edges) {
    inDegrees.get(y).push(x);
  }

  let ans = [];
  // 2,0,1
  //   let res2 = dfs(6);

  for (let i = 0; i < n; i++) {
    // ans.push(Array.from(dfs(i).sorted((a, b) => a - b)));
    let temp = Array.from(dfs(i));
    temp.sort(function (a, b) {
      return parseInt(a) - parseInt(b);
    });
    ans.push(temp);
  }
  // gets the correct memos
  // now need to start shortcutting above
  console.log(ans);
  return ans;
};

// n = 8,
//edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
getAncestors(8, [
  [0, 3],
  [0, 4],
  [1, 3],
  [2, 4],
  [2, 7],
  [3, 5],
  [3, 6],
  [3, 7],
  [4, 6],
]);
