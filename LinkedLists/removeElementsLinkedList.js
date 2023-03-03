/* SUCCESS */ // Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
var removeElements = function (head, val) {
  let dummy = { val: 0, next: head };
  let curr = dummy;
  let prev = null;
  while (curr) {
    // multiple sixes in a row
    if (curr.next && curr.next?.val === val) {
      // curr = curr.next
      prev = curr;
      curr = curr.next;
      while (curr && curr?.val === val) {
        curr = curr.next;
      }
      prev.next = curr;
      //  curr.next = curr.next.next;
      //  curr = curr.next;
      continue;
    }
    curr = curr.next;
  }
  return dummy.next;
};
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 6,
        next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
      },
    },
  },
};

//removeElements(head, 6);

let head2 = {
  val: 7,
  next: {
    val: 7,
    next: {
      val: 7,
      next: {
        val: 7,
        next: { val: 7, next: { val: 7, next: { val: 7, next: null } } },
      },
    },
  },
};

removeElements(head2, 7);
