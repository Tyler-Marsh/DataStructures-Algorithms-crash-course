// Input: head = [1,2,3,4]
// Output: [1,2,4]

/* 
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
*/

function RemoveMiddleNode(head) {
  if (!head.next) {
    return head;
  }
  let fast = head.next;
  let slow = head;
  let b4;
  while (fast) {
    fast = fast?.next?.next;
    if (!fast) {
      b4 = slow;
    }
    slow = slow.next;
  }
  b4.next = slow.next;
  return head;

  // slow equals the middle
  // loop again to connect???
}
let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: null } },
  },
};
console.log(RemoveMiddleNode(head));

let head1 = { val: 2, next: { val: 1, next: null } };

console.log(RemoveMiddleNode(head1));

let head2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 7,
        next: { val: 1, next: { val: 2, next: { val: 6, next: null } } },
      },
    },
  },
};
console.log(RemoveMiddleNode(head2));
