//Given a linked list, swap every two adjacent nodes and return its head.
//You must solve the problem without modifying the values in the list's nodes
//(i.e., only nodes themselves may be changed.)

function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = { val: 0, next: { head } };
  let firstNode;
  let secondNode;
  let prevNode = dummy;
  let nextNode;

  /* START WITH A DUMMY NODE. Don't ASSIGN A VARIABLE TO ITSELF */
  while (head && head.next) {
    firstNode = head;
    secondNode = head.next;
    nextNode = secondNode.next;
    prevNode.next = secondNode;

    secondNode.next = firstNode;
    firstNode.next = nextNode;

    // secondNode.next = firstNode;
    // firstNode.next = nextNode;

    head = nextNode;
    prevNode = firstNode;
  }
  return dummy.next;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: null } },
  },
};

let head2 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

console.log(swapPairs(head2));
