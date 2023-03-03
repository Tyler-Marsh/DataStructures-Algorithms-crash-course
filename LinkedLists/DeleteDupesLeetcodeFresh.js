// Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
//leaving only distinct numbers from the original list. Return the linked list sorted as well.
function DeleteDupes(head) {
  let sentinel = { val: 0, next: head };
  let pred = sentinel;
  // 1,2,3,3
  while (head.next !== null) {
    if (head.next && head.val === head.next.val) {
      while (head.val === head.next.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      pred = pred.next;
    }
    head = head.next;
  }
}

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

DeleteDupes(head3);

console.log("e");
