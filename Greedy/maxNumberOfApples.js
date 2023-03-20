// You have some apples and a basket that can carry up to 5000 units of weight.

// Given an integer array weight where weight[i] is the weight of the ith apple, return the maximum number of apples you can put in the basket.

/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function (weight) {
  weight.sort((a, b) => a - b);

  let total = 0;
  let currWeight = 0;
  for (let i = 0; i < weight.length; i++) {
    currWeight += weight[i];
    if (currWeight < 5000) {
      total++;
    }
  }
  return total;
};

// Input: weight = [100,200,150,1000]
// Output: 4

// Input: weight = [900,950,800,1000,700,800]
// Output: 5
