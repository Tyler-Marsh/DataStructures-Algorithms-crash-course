// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

function oddEvenList(head) {
  let dummy = { val: 0, next: head };

  // keep pushing even numbers up the linked list
  let even = head.next;
  let odd = head;
  // must save the first even number for the rest of the list
  let firstEven = dummy?.next?.next;
  let lastOdd;
  // literally split them up completely as pointers/
  // then made the last odd point to the first even head
  // very clever
  evenHead = even;

  // make the while loop equal to the leading part
  // even is the leading part
  while (even && even.next) {
    // odd -> next odd
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
    // [2,3,1,5 ]
  }
  odd.next = evenHead;
  return head;
}

let head2 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

let head3 = {
  val: 2,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 5,
        next: { val: 6, next: { val: 4, next: { val: 7, next: null } } },
      },
    },
  },
};

console.log(oddEvenList(head2));
