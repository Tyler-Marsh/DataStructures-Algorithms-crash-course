/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//
// example of a monotonic decreasing deque
// items enter from the right
// items leave from the left;

var maxSlidingWindow = function (nums, k) {
  let ans = [];
  let queue = [];
  for (let i = 0; i < nums.length; i++) {
    // maintain monotonic decreasing.
    // all elements in the deque smaller than the current one
    // have no chance of being the maximum, so get rid of them
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);

    // queue[0] is the index of the maximum element.
    // if queue[0] + k == i, then it is outside the window
    if (queue[0] + k == i) {
      queue.shift();
    }

    // only add to the answer once our window has reached size k
    if (i >= k - 1) {
      ans.push(nums[queue[0]]);
    }
  }

  return ans;
};

// queue.push(1)
// queue.shift() ??
// queue.push(-1) ??

// [3,-1]
//
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// get the sum of the three numbers then put it in an array
// monotonic stack???
//
maxSlidingWindow(nums, 3);
