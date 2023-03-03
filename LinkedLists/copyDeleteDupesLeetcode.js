function deleteDuplicates(head) {
  let sentinal = { val: 0, next: head };
  let pred = sentinal;

  while (head !== null) {
    if (head.next !== null && head.val === head.next.val) {
      while (head.next !== null && head.val === head.next.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      pred = pred.next;
    }
    head = head.next;
  }
  return sentinal.next;
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
console.log(deleteDuplicates(head3));
