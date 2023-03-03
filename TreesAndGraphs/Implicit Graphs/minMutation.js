/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  function oneAway(gene1, gene2) {
    let diff = 0;
    for (let i = 0; i < gene1.length; i++) {
      if (gene1[i] !== gene2[i]) {
        diff++;
      }
    }
    return diff === 1;
  }

  let copyBank = bank;
  let queue = [startGene];
  let seen = new Set();
  if (startGene === endGene) {
    return 0;
  }

  // I could put everything 1 away found into a Set/Map
  // then when I come across it again I skip it
  let steps = 0;
  while (queue.length) {
    let nextQueue = [];

    let queueLength = queue.length;
    steps++;

    for (let i = 0; i < queueLength; i++) {
      for (let j = 0; j < bank.length; j++) {
        if (!seen.has(bank[j]) && oneAway(queue[i], bank[j])) {
          seen.add(bank[j]);
          nextQueue.push(bank[j]);
          if (bank[j] === endGene) {
            return steps;
          }
        }
      }
    }
    queue = nextQueue;

    // now I need to loop over to see
  }
  return -1;

  // need to know if the we are 1 away, if so switch to the gene.
};

// I need to loop each

console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);

console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
