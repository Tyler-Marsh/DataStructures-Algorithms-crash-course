// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// 1 <= nums1.length <= nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 104
// All integers in nums1 and nums2 are unique.
// All the integers of nums1 also appear in nums2.
function nextGreaterElement(nums1, nums2) {
  // ascending deque
  let stack = [];
  let numbersExist = {};

  for (let j = 0; j < nums1.length; j++) {
    // add 1 to avoid javascript interpreting 0 as false
    numbersExist[nums1[j]] = j + 1;
  }
  let index;
  let answer = new Array(nums1.length).fill(-1);

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      if (numbersExist[stack[stack.length - 1]]) {
        index = numbersExist[stack.pop()];
        answer[index - 1] = nums2[i];
      } else {
        stack.pop();
      }
    }
    stack.push(nums2[i]);
  }

  return answer;
}

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));

let nums3 = [2, 4];
let nums4 = [1, 2, 3, 4];
//Output: [3,-1]

console.log(nextGreaterElement(nums3, nums4));
