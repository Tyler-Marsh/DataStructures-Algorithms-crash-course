// You are given an integer array prices where prices[i] is the price of the ith item in a shop.

// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let ans = prices.slice();
  let stack = [];
  let curr;
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && stack[stack.length - 1][0] >= prices[i]) {
      curr = stack.pop();
      //  take greater amount subtract new amount found that has less
      // store it in the proper index of answer array
      ans[curr[1]] = curr[0] - prices[i];
    }
    // store the index of the original price
    stack.push([prices[i], i]);
  }
  return ans;
};

console.log(finalPrices([8, 4, 6, 2, 3]));

console.log(finalPrices([1, 2, 3, 4, 5]));

console.log(finalPrices([10, 1, 1, 6]));
//put: prices = [1,2,3,4,5]
//Output: [1,2,3,4,5]

/* 
Input: prices = [10,1,1,6]
Output: [9,0,1,6]
*/
