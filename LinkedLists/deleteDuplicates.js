//Input: head = [1,1,2,3,3]
//Output: [1,2,3]

function deleteDupes(head) {
  let slow = head;
  let fast = head.next;

  while (fast) {
    if (fast?.val === slow.val) {
      while (fast?.val === slow.val) {
        fast = fast.next;
      }
      slow.next = fast;
    }
    fast = fast?.next;
    slow = slow.next;
  }

  return head;
}

let list = { head: { val: 1, next: null } };
list.head.next = { val: 1, next: null };
list.head.next.next = {
  val: 2,
  next: { val: 3, next: { val: 3, next: null } },
};
// delete takes the previous and the next.
//
console.log(deleteDupes(list.head));
