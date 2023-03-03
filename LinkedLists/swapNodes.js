function swapNodes(head, k) {
  if (!head || !head.next) {
    return head;
  }
  // node before k needs
  // to recieve a next of

  // n-1 of linked list
  //

  /*
    could I loop through once getting 6 variables?
    [1,2,3,4,5]
    get 1,2,3
    get 3,4,5
    make 1 -> 4 -> 3
    make 3 -> 2 -> 5
    */
  let sentinel = { val: 0, next: head };

  // k = 2
  let slower = sentinel;
  let slow;
  let firstPred = sentinel;
  let lead = sentinel;
  let count = 0;
  let fast = sentinel;

  // first pred node
  for (let i = 0; i < k - 1; i++) {
    // 1
    firstPred = firstPred.next;
    count++;
  }

  // make a fast or a lead go until there is no next.
  // that means its at the end of the list
  // make a slow track it 1 for 1 until there is not fast.next
  // that seems to get to the end of the linked list
  for (let j = 0; j < k; j++) {
    fast = fast.next;
  }
  slow = sentinel.next;
  while (fast.next) {
    // last node
    // 5
    fast = fast.next;
    // node to switch
    // 4
    slow = slow.next;
    // node before switching
    // 3
    slower = slower.next;
  }

  // if (slow === firstPred.next) {
  //   return sentinel.next;
  // }

  // order to switch the nodes
  // 3
  let afterPred = firstPred.next.next;
  let firstSwitch = firstPred.next;

  // 1 -> 4
  firstPred.next = slow;
  // 4 -> 3
  let lastSwitch = slow.next;
  slow.next = afterPred;
  // 3 -> 2

  afterPred.next = firstSwitch;
  // 2 -> 5
  firstSwitch.next = lastSwitch;

  return sentinel.next;
  // loop from the sentinel
  // let fast get a head start
  // track if some of these values are
  // equal to each other in memory
  // then make appropriate swaps?
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

//console.log(swapNodes(head, 2));

let head1 = {
  val: 7,
  next: {
    val: 9,
    next: {
      val: 6,
      next: {
        val: 6,
        next: {
          val: 7,
          next: {
            val: 8,
            next: {
              val: 3,
              next: { val: 0, next: { val: 9, next: { val: 5, next: null } } },
            },
          },
        },
      },
    },
  },
};

//console.log(swapNodes(head1, 5));

let head2 = {
  val: 7,
  next: {
    val: 9,
    next: {
      val: 6,
    },
  },
};

//console.log(swapNodes(head2, 1));

let head3 = {
  val: 2,
  next: null,
};

//console.log(swapNodes(head3, 1));

let head4 = {
  val: 1,
  next: { val: 2, next: { val: 3, next: null } },
};

console.log(swapNodes(head4, 2));
