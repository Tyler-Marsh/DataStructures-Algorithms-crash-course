// //Given the head of a linked list, remove the nth node from the end of the list and return its head.
//* Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function RemoveNth(head, n) {
  if (head == null || head.next == null) {
    return null;
  }

  let sentinel = new ListNode(0, head);
  let fast = head;
  let slow = sentinel;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return sentinel.next;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

console.log(RemoveNth(head, 4));
