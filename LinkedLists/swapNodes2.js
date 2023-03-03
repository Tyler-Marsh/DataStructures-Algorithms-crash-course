// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

//  1,2,3 k = 2
// 1,2,3,4,5  k = 2
//head =[100,90] , k= 2
function swapNodes(head, k) {
  let sentinel = { val: 0, next: head };
  let firstToSwap = sentinel;
  let secondToSwap = sentinel;
  let count = 0;
  let firstStore;

  while (firstToSwap) {
    firstToSwap = firstToSwap.next;
    count++;
    if (count === k - 1) {
      firstStore = firstToSwap;
      break;
    }
  }

  for (let j = 0; j < k; j++) {
    secondToSwap = secondToSwap.next;
  }
  slow = sentinel.next;
  while (secondToSwap.next) {
    secondToSwap = secondToSwap.next;
    slow = slow.next;
  }

  return sentinel.next;
}

let head4 = {
  val: 90,
  next: { val: 100, next: null },
};

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

console.log(swapNodes(head, 2));
