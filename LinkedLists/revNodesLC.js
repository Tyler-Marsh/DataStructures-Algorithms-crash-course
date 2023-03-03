function reverseEvenLengthGroups(head) {
  //If there is only one node or only two nodes in the list then list remains unchanged
  if (head.next == null || head.next.next == null) return head;

  //Since group 1 will always have one node
  let temp = head;
  let prevNode = head;
  let group = 1;
  let nodes;

  while (temp.next != null) {
    //Move to the next group
    group++;

    //Find how many nodes will be in this group.
    //Number of nodes cannot exceed group number
    nodes = 0;
    while (temp.next != null && nodes < group) {
      temp = temp.next;
      nodes++;
    }

    //After this loop, temp will be pointing to the last node of this group
    let nodeAfterGroup = temp.next;

    //If the length of this group is even then reverse this group
    if (nodes % 2 == 0) {
      //Get the list to reverse
      let listToReverse = prevNode.next;
      let ptr = listToReverse;
      while (ptr != temp) ptr = ptr.next;
      ptr.next = null;

      //Reverse this list
      listToReverse = reverse(listToReverse);
      let revPtr = listToReverse;
      while (revPtr.next != null) revPtr = revPtr.next;

      //Attach it back to the original list properly
      prevNode.next = listToReverse;
      revPtr.next = nodeAfterGroup;

      //Make sure temp now points to the last node of this group after we reversed it.
      temp = revPtr;
    }

    //Set the previousNode as temp i.e., the node just before the beginning of next group
    prevNode = temp;
  }

  return head;
}

let head = {
  val: 1,
  next: {
    val: 1,
    next: { val: 0, next: { val: 6, next: { val: 5, next: null } } },
  },
};

reverseEvenLengthGroups(head);
