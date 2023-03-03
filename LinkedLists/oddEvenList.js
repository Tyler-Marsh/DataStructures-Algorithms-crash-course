var oddEvenList = function (head) {
  // intuition... must keep pushing the odds /events up the linked list
  //Input: head = [1,2,3,4,5]
  //Output: [1,3,5,2,4]
  // smaller switches????

  //  first = sentinel
  //  loop more. fewer assignments
  //  curr == current index of spot incrementing by one

  // lastOdd = sentinel
  // newOdd =null;
  // lastEven = 2 if !index % 2
  // newOdd

  let index = 1;
  let first;
  let second;
  let third;
  let sentinel = { val: 0, next: head };
  sentinel = sentinel.next;
  // 1 ,3 ,2 4, 5
  while (sentinel) {
    if (sentinel.next && sentinel.next.next) {
      first = sentinel;
      second = sentinel.next;
      third = sentinel.next.next;
      second.next = third.next ?? null;
      first.next = third;
      third.next = second;
      // #2
      sentinel = sentinel.next.next;
    }
  }

  // point index 2 -> index 4
  // 2.next = 4
  // point index 1 -> index 3
  // 1.next = 3
  // 3.next = 2
  // continue with index 2

  // 1 stays
  // 2 -->
};
let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};
console.log(oddEvenList(head));

// [1,2,3,4,5]
