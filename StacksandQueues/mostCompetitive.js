/* 

Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.
An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.
We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position
 where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is
  more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.

*/
// subsequence you can delete some numbers
// you can only erase a certain number based on
// nums.length - k
// then as long as you have erases left you can do this
// loop through the array
// add to the stack/queue
// if thenew element is smaller than the smallest element in the deque
// remove last element in the deque
// additionalCount--
// then add it to the deque
function mostCompetitive(nums, k) {
  let queue = [];
  let additionalCount = nums.length - k;
  for (let i = 0; i < nums.length; i++) {
    while (
      queue.length !== 0 &&
      queue[queue.length - 1] > nums[i] &&
      additionalCount > 0
    ) {
      queue.pop();
      additionalCount--;
    }
    queue.push(nums[i]);
  }
  let result = new Array(k).fill(0);
  for (let i = 0; i < k; i++) {
    result[i] = queue.shift();
  }
  return result;
}

// additional count is the number of times we can ignore the next number
// the heart of this problem is just finding a a subsquence (which is ordered)
// that is the lowest possible.
// to do that find the lowest starting number you can and keep switching out as long as you have switches
/* 
Input: nums = [2,4,3,3,5,4,9,6], k = 4
Output: [2,3,3,4]
*/

let nums = [2, 4, 3, 3, 5, 4, 9, 6];

mostCompetitive(nums, 4);
