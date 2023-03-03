function dupeCards(cards) {
  let dupes = new Map();
  let curr;
  let min = Infinity;
  for (let i = 0; i < cards.length; i++) {
    curr = cards[i];
    if (dupes.has(curr)) {
      min = Math.min(i - dupes.get(curr) + 1, min);
    }

    dupes.set(curr, i);
  }
  if (min < 1000001) {
    return min;
  }
  return -1;
}

console.log("Expected 4, Actual: ", dupeCards([3, 4, 2, 3, 4, 7]));

//
console.log(
  "Expected 3, Actual: ",
  dupeCards([
    95, 11, 8, 65, 5, 86, 30, 27, 30, 73, 15, 91, 30, 7, 37, 26, 55, 76, 60, 43,
    36, 85, 47, 96, 6,
  ])
);
