var getIntersectionNode = function (headA, headB) {
  let countB = 0;
  let countA = 0;

  let dummyB = headB;
  let dummyA = headA;

  while (dummyB) {
    countB++;
    dummyB = dummyB.next;
  }

  while (dummyA) {
    countA++;
    dummyA = dummyA.next;
  }

  let diff = Math.abs(countB - countA);
  if (countB > countA) {
    while (diff > 0) {
      headB = headB.next;
      diff--;
    }
  } else if (countA > countB) {
    while (diff > 0) {
      headA = headA.next;
      diff--;
    }
  }

  while (headB && headA) {
    if (headB === headA) {
      return headB;
    }
    headB = headB.next;
    headA = headA.next;
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

console.log(getIntersectionNode(headA, headB));
