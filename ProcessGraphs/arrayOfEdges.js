//      2
//   /  ^  \
//  0 > 1   3

let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [2, 3],
];

// want to give a node as an argument, and get a list of all neighbors
// usually a hasmap...

// if we give node 2
// we want to get 0 && 3 back.
// {'2': [0,3]}

// makes a directed graph
// all the connections are stored here

// it is directed because they only go one way
function buildGraph(edges) {
  let graph = new Map();

  for (let i = 0; i < edges.length; i++) {
    if (!graph.has(edges[i][0])) {
      graph.set(edges[i][0], []);
    }
    graph.get(edges[i][0]).push(edges[i][1]);

    /* WHY IS THIS UNDIRECTED ? */
    /* because we add the inverse relationship as well. so [0,1] we say
    add 1 to the graph. make 0 its neighhbor/partner
    */
    /* UNDIRECTED */
    if (!graph.has(edges[i][1])) {
      graph.set(edges[i][1], []);
    }
    graph.get(edges[i][1]).push(edges[i][0]);
    console.log(graph);
  }
}

//
buildGraph(edges);
