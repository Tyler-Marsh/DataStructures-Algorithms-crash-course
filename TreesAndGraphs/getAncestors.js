// You are given a positive integer n representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive).

// You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there is a unidirectional edge from fromi to toi in the graph.

// Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in ascending order.

// A node u is an ancestor of another node v if u can reach v via a set of edges.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

// return an array filled with the number of indegrees they have plus their parents have
// make sure it is properly sorted afterwards/ or during
var getAncestors = function (n, edges) {
  // make a graph
  let outDegrees = new Map();
  let inDegrees = new Map();
  for (let i = 0; i < n; i++) {
    inDegrees.set(i, []);
  }
  // loop through array of edges
  // directed acyclic
  for (const [x, y] of edges) {
    inDegrees.get(y).push(x);
    // graph.get(x).push(y);
  }

  // loop through 8
  // construct the response outpud

  // in place mutation
  const getAllAncestors = (ancestors) => {
    // [3,4]
    // what do I do here?
    if (ancestors.length) {
      for (let i = 0; i < ancestors.length; i++) {
        // why doesn't checking for ancestors array work?
        // this would ensure no duplicates
        if (!ancestorsArr.includes(ancestors[i])) {
          ancestorsArr.push(ancestors[i]);
        }

        getAllAncestors(inDegrees.get(ancestors[i]));
      }
    }
  };
  // how I can call each...
  // lets see I might not have the right datastructe

  // I need to know which go to instead of out of
  console.log(inDegrees);
  let ans = [];
  let temp = [];
  let ancestorsArr = [];
  let precomputedAncestors = {};
  for (let i = 0; i < n; i++) {
    ancestorsArr = [];
    temp = [];
    temp = inDegrees.get(i);
    if (i === 6) {
      console.log(i);
    }
    if (temp.length) {
      // instead of this maybe I can check if the
      // ancestors are already calculated
      if (!precomputedAncestors[i]) {
        getAllAncestors(temp);
        precomputedAncestors[i] = ancestorsArr;
      }
      //temp = temp.concat(ancestorsArr);
      // see why two zeros are in the array??
      ancestorsArr.sort((a, b) => a - b);
      //
      ans.push(ancestorsArr);
    } else {
      ans.push([]);
    }
  }

  // what if I just double loop and have a calculation object
  /* 
  0:[]
1:[]
2:[]
3: [0, 1]
4:[0, 2]
5: [0, 1, 3]
6:[0, 1, 2, 3, 4]
7:[0, 1, 2, 3]
  */
  // Time Limit Exceeded

  // how can I stop checking everything???
  // I could check to make sure that number is in the array
  console.log("no way");

  // dfs or something to continually get all the results incase there are a
  // bajillion acnestors
  // [2, 3]
};

// n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
//Output: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]

console.log(
  "expected:[[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]], actual:  ",
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
  ])
);
