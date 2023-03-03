//Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing
//moving one unit north, south, east, or west, respectively.
//You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

//Return true if the path crosses itself at any point, that is, if
//at any time you are on a location you have previously visited. Return false otherwise.
/**
 *
 * @param {string} path
 * @return {boolean}
 */

//
function pathCrossing(path) {
  let locations = {};
  let y = 0;
  let x = 0;
  let curr = "";

  locations[`${x},${y}`] = true;

  // cut off early???
  for (let i = 0; i < path.length; i++) {
    curr = `${x},${y}`;
    if (path[i] === "N") {
      y++;
    } else if (path[i] === "E") {
      x++;
    } else if (path[i] === "S") {
      y--;
    } else {
      x--;
    }
    curr = `${x},${y}`;
    if (locations[curr]) {
      return true;
    }
    locations[curr] = true;
  }
  return false;
}

console.log(pathCrossing("NESWW"));

console.log(pathCrossing("NES"));
