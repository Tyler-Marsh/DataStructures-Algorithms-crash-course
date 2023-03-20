/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

// sort by maximum boxTypes[1]
function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let fits = 0;
  let i = 0;
  let units = 0;
  // what if everything fits?
  while (fits < truckSize && i < boxTypes.length) {
    j = 0;
    if (boxTypes[i][0] + fits <= truckSize) {
      units += boxTypes[i][0] * boxTypes[i][1];
      fits += boxTypes[i][0];
      i++;
    } else {
      while (j < boxTypes[i][0] && fits < truckSize) {
        fits++;
        units += boxTypes[i][1];
        j++;
      }
      i++;
    }
  }

  return units;
}

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
