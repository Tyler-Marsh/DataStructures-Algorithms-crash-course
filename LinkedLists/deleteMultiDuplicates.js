//Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
//leaving only distinct numbers from the original list. Return the linked list sorted as well.

function RemoveDupes(head) {
  if (head.next === null) {
    return head;
  }

  let sentinel = { val: 0, next: head };
  let prev;
  let curr = head;
  let base = sentinel.next;
  // hold onto a prev
  let temp = curr.val;

  while (curr) {
    prev = curr;

    curr = curr.next;
    if (prev.val !== curr?.val && curr?.val !== curr?.next?.val) {
      base = curr;
    }

    while (prev?.val === curr?.val && curr) {
      curr = curr.next;
      if (curr?.val !== prev?.val) {
        base.next = curr;
      }
    }
  }
  return sentinel.next;
}

let head1 = {
  val: 1,
  next: { val: 1, next: { val: 2, next: null } },
};

works;
console.log(RemoveDupes(head1));

let head = {
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

//console.log(RemoveDupes(head));
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

let head3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: { val: 5, next: { val: 6, next: { val: 6, next: null } } },
      },
    },
  },
};

// 1,2, 5
console.log(RemoveDupes(head3));
// Input: head = [1,1,1,2,3]
// Output: [2,3]

let head2 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: null },
      },
    },
  },
};
// 2, 3 works
console.log(RemoveDupes(head2));
