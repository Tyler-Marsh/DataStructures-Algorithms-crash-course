var getIntersectionNode = function (headA, headB) {
  let dummyA = headA;
  let dummyB = headB;

  function reverse(head) {
    let prev = null;
    let nextNode;
    let curr = head;
    while (curr) {
      nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    return prev;
  }

  let currA = reverse(dummyA);
  let currB = reverse(dummyB);
  let prevA;
  let prevB;
  if (currA !== currB) {
    return null;
  }
  while (currA && currB) {
    prevB = currB;
    currB = currB.next;
    prevA = currA;
    currA = currA.next;

    if (currA !== currB) {
      return prevB;
    }
  }
  return null;
};

let connection = {
  val: "c1",
  next: { val: "c2", next: { val: "c3", next: null } },
};

let headA = { val: "a1", next: { val: "a2", next: connection } };

let headB = {
  val: "b1",
  next: { val: "b2", next: { val: "b3", next: connection } },
};

// will the connection node actually cooperate or will it get reversed
// making the next reversal not work?
getIntersectionNode(headA, headB);
