//You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

//It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// return the city that doesn't have a path to another city
// it must only be second
function destinationPath(paths) {
  let last = new Map();
  let start;
  let end;
  for (let i = 0; i < paths.length; i++) {
    start = paths[i][0];
    end = paths[i][1];
    last.set(start, (last.get(start) || 0) + 1);
    last.set(end, last.get(end) + 1 || 0);
  }

  let destination = "";
  for ([key, value] of last) {
    if (value === 0) {
      destination = key;
    }
  }

  return destination;
}

console.log(
  destinationPath([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);

console.log(
  destinationPath([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);

console.log(destinationPath([["A", "Z"]]));

console.log(
  destinationPath([
    ["pYyNGfBYbm", "wxAscRuzOl"],
    ["kzwEQHfwce", "pYyNGfBYbm"],
  ])
);
