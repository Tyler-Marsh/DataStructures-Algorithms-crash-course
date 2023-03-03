function reverseNodesEven(head) {
  if (!head || !head.next) {
    return head;
  }

  function forward(linkedList, count) {
    let curr = linkedList;
    let start = curr;
    let tail;
    while (count > 0 && curr) {
      curr = curr.next;
      count--;
    }
    return { head: start, tail };
  }

  function reverse(linkedList, count) {
    let prev = null;
    let nextNode;
    let curr = linkedList;
    let tail = curr;
    while (count > 0 && curr) {
      // save the current node;
      nextNode = curr.next;
      // point the current node to the one behind it
      curr.next = prev;
      // new previous
      prev = curr;
      // new current
      curr = nextNode;
      count--;
    }
    return { head: prev, tail };
  }

  let dummy = head;
  let count = 0;
  while (dummy) {
    count++;
    dummy = dummy.next;
  }
  let groupSize = 1;
  let shouldReverse;
  let first = true;
  let reverseResults;
  let sentinel = head;
  let sentinelTail = sentinel;

  while (count > 0) {
    shouldReverse = count - groupSize > 0 && groupSize % 2 === 0;
    if (count - groupSize < 0) {
      shouldReverse = count % 2 === 0;
    }
    count -= groupSize;

    if (shouldReverse) {
      reverseResults = reverse(sentinel, groupSize);
      sentinelTail.next = reverseResults.head;
      groupSize++;
    } else {
      forwardResults = forward(sentinel, groupSize);
      if (first) {
        sentinelTail = sentinel;
      } else {
        sentinelTail.next = forwardResults.head;
      }
      first = false;
      groupSize++;
    }
  }
  return head;
}

reverseNodesEven({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: { val: 6, next: { val: 7, next: { val: 8, next: null } } },
        },
      },
    },
  },
});
