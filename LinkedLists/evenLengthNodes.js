var reverseEvenLengthGroups = function (head) {
  // 1,1,0,6

  let length = 0;
  let dummy = head;

  while (dummy) {
    length++;
    dummy = dummy.next;
  }

  //Special case for last group
  let groupNo = 0;
  let current = head;
  dummy = { val: 0, next: head };
  prev = dummy;
  let nodesLeft;
  let start;
  let last;
  let curNext;
  let pt;

  while (current != null) {
    groupNo++;
    nodesLeft = length - pt;
    groupNo = Math.min(groupNo, nodesLeft);
    if (groupNo % 2 == 0) {
      (start = prev), (last = null);
      //prev -> current -> curNext -> last
      for (let i = 0; i < groupNo; i++) {
        curNext = current.next;
        current.next = prev;
        if (i == 0) last = current;
        prev = current;
        current = curNext;
      }
      start.next = prev;
      last.next = current;
      prev = last;
    } else {
      for (let i = 0; i < groupNo; i++) {
        prev = current;
        current = current.next;
      }
    }
    pt += groupNo;
  }
  return dummy.next;
};

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};
reverseEvenLengthGroups(head);
