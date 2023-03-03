function reverseNodesEven(head) {
  if (!head || !head.next) {
    return head;
  }

  function forward(head, count) {
    let curr = head;
    let start = curr;
    let tail;
    while (count > 0 && curr) {
      curr = curr.next;
      count--;
    }
    return { head: start, tail };
  }

  function reverse(head, count) {
    let prev = null;
    let nextNode;
    let curr = head;
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

  let groupSize = 1;
  let groupSizeRemaining = 0;
  let curr = head;

  let shouldReverse = true;
  let reverseResults;
  let forwardResults;
  let lastWasForward;

  let count = 0;
  let dummy = head;

  while (dummy) {
    count++;
    dummy = dummy.next;
  }
  let sentinel = { val: 0, next: head };
  sentinel = sentinel.next;
  let sentinelTail = sentinel;
  let first = true;

  while (count > 0) {
    shouldReverse = count - groupSize > 0 && groupSize % 2 == 0 && !first;
    if (count - groupSize < 0) {
      shouldReverse = count % 2 === 0;
    }
    count -= groupSize;

    if (shouldReverse) {
      // staple the last head onto the last sentinel

      // need to know what to put in here
      reverseResults = reverse(sentinel, groupSizeRemaining);
      sentinelTail.next = reverseResults.head;
      sentinelTail = reverseResults.tail;

      groupSize++;
      groupSizeRemaining = groupSize;
      lastWasForward = false;
      // connector ?
    } else {
      forwardResults = forward(sentinel, groupSizeRemaining);
      sentinelTail.next = forwardResults.head;
      sentinelTail = forwardResults.tail;

      // if forwardResults is only a pointer
      // then would stapling them onto each other work?
      // forward function
      // look for last object to staple the results to
      groupSize++;
      groupSizeRemaining = groupSize;
      lastWasForward = true;
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
