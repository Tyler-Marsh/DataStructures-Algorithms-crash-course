function RemoveDupes(head) {
  if (head.next === null) {
    return head;
  }

  let curr = head;
  let sentinel = { val: 0, next: head };
  let prev;

  // if first node is a dupe
  if (curr?.val === curr?.next?.val) {
    while (curr?.val === curr?.next?.val) {
      curr = curr.next;
    }
    sentinel.next = curr.next;
    prev = sentinel.next;
  }
  // case 1st is a duplicate

  while (curr) {
    // put in a base case
    // [1,2,3,3,4,4,5]
    curr = curr.next;
  }
  return sentinel.next;
  // now if the rest are
}

// 1,2,5
let head3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: { val: 4, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
  },
};

let head = { val: 1, next: { val: 1, next: { val: 2, next: null } } };

let head2 = {
  val: 1,
  next: { val: 3, next: { val: 3, next: { val: 4, next: null } } },
};

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
//console.log(RemoveDupes(head3));

console.log(RemoveDupes(head3));
