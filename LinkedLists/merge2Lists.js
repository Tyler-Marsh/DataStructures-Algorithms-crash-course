function mergeTwoLists(list1, list2) {
  let list1Curr = list1;
  let list2Curr = list2;
  // cut off list2Curr;
  let temp1;
  let nextNode;
  let dummy = list1;
  let list2Next;
  let list1Next;

  // if item1
  /* watch naming convention */

  /* I Got through the first test case very good news!!!*/
  let list1Prev;
  let list2Prev;
  /* what if the second is less than? */
  // try looping down one list
  while (list1Curr && list2Curr) {
    if (list1Curr.val <= list2Curr.val) {
      list1Prev = list1Curr;
      list2Prev = list2Curr;

      list1Next = list1Curr.next;
      list2Next = list2Curr.next;
      list1Curr.next = list2Curr;

      list1Curr.next.next = list1Next;
      list1Curr = list1Next;
      list2Curr = list2Next;
      list1Prev = list1Prev.next;
      continue;
    }
    // 1 ,2 ,5

    // 1,3,4

    // put 4 before the 5
    if (list1Curr.val > list2Curr.val) {
      list2Prev.next = list2Curr;
      list2Curr = list2Curr.next;
    }
  }
}

let head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 5,
      next: null,
    },
  },
};

let head2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

//mergeTwoLists(head1, head2);

let head3 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

mergeTwoLists(head1, head3);
