function oddEvenList(head) {
  if (head == null) return null;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};
console.log(oddEvenList(head));

// I suck at pointers rn
