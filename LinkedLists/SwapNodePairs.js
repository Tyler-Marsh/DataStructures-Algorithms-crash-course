function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  // REFRENCE TO 2 BECAUSE THEN WE CAN BUILD OUT
  // THE LINKED LIST FROM THERE
  let dummy = head.next;
  let nextNode;
  let temp;
  let temp2;

  if (!head?.next?.next) {
    temp = head;
    temp2 = head.next;
    temp2.next = temp;
    temp2.next.next = null;
    return dummy;
  }

  // have to hold onto prev?

  // maybe direct assignments don't carry over
  //
  while (head && head.next) {
    if (head.next && head.next.next) {
      // store C
      nextNode = head.next.next;
      temp = head.next;
      // point B to A
      head.next.next = head;
      // Store
      temp.next.next = nextNode;
      head = nextNode;
      continue;
    }
    if (head.next && !head.next.next) {
      // 3,4
      // store 3
      // point 4 to 3
      // point 3 to null
      temp.next.next = head.next;
      temp2 = temp.next.next;
      temp2.next = head;
      temp2.next.next = null;

      return dummy;
      // 2, 1, 3 . null???
      // store #3
      // store #4
      // temp2 = head.next;
      // head = temp2;
      // head.next = temp;
      // nextNode = head.next;
      // temp = head;
      // head = nextNode;
      // head.next = temp;

      // // Dummy list is  2,1,3,4 now
      // // investigate why that is

      // // head represents what I want
      // // but the changes aren't reflected in
      // // dummy node this time.

      // // seems like I can't predict when dummy node will be changed.
      // head.next.next = null;
    }
    head = nextNode;
  }
  return dummy;

  //   let dummy = head.next; // Step 5
  //   let prev = null; // Initialize for step 3
  //   while (head && head.next) {
  //     if (prev) {
  //       prev.next = head.next; // Step 4
  //     }
  //     prev = head; // Step 3

  //     let nextNode = head.next.next; // Step 2
  //     head.next.next = head; // Step 1

  //     head.next = nextNode; // Step 6
  //     head = nextNode; // Move onto the next pair
  //   }

  //   return dummy;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: null } },
  },
};

//console.log(swapPairs(head));

let head2 = { val: 1, next: { val: 2, next: null } };

//console.log(swapPairs(head2));

let head3 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

console.log(swapPairs(head3));
