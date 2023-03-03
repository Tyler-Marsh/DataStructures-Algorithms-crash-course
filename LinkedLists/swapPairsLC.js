function swapPairs(head) {
  // Dummy node acts as the prevNode for the head node
  // of the list and hence stores pointer to the head node.
  let dummy = { val: 0, next: null };
  dummy.next = head;
  let firstNode;
  let secondNode;

  let prevNode = dummy;

  /* STUDY THEIR SWAPS VS MY SWAPS */
  /* THEIR SWAPS WORK. MINE DO NOT SEEM TO WORK WTF WHY */

  while (head != null && head.next != null) {
    // Nodes to be swapped
    firstNode = head;
    secondNode = head.next;

    // Swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Reinitializing the head and prevNode for next swap
    prevNode = firstNode;
    head = firstNode.next; // jump
  }

  // Return the new head node.
  return dummy.next;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: null } },
  },
};

console.log(swapPairs(head));
