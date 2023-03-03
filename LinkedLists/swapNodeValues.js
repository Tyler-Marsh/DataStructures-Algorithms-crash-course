function swapNodeValues(head, k) {
  let sentinel = { val: 0, next: head };

  let fast = sentinel;
  let firstPred = sentinel;
  let slow = sentinel;
  let slower = sentinel;
  slow = sentinel.next;
  // first pred node
  for (let i = 0; i < k - 1; i++) {
    // 1
    firstPred = firstPred.next;
  }

  for (let j = 0; j < k; j++) {
    fast = fast.next;
  }
  slow = sentinel.next;
  while (fast.next) {
    // last node
    fast = fast.next;
    // node to switch
    slow = slow.next;
    // node before switching
    slower = slower.next;
  }

  let temp = firstPred.next.val;
  firstPred.next.val = slow.val;
  slow.val = temp;
  // 1,4,3,2,5
  return sentinel.next;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

let head1 = {
  val: 90,
  next: { val: 100, next: null },
};
swapNodeValues(head1, 2);
