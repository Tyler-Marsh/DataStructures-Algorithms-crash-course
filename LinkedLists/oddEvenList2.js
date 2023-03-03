// intuition... must keep pushing the odds /events up the linked list
//Input: head = [1,2,3,4,5]
//Output: [1,3,5,2,4]
// smaller switches????

//  first = sentinel
//  loop more. fewer assignments
//  curr == current index of spot incrementing by one

// lastOdd = sentinel
// newOdd = null;
// lastEven = 2 if !index % 2
// newOdd
// reverse through a certain index ???

function OddEvenList(head) {
  if (!head?.next?.next) {
    return head;
  }

  // Edge Cases for  length 3,4
  // null & 1 & 2 just return

  // store the odd variable
  // when get to an even index
  // store even
  // when get to next odd index

  // if this works then we have to move index to four
  // 1,2,3,4,5,6,7,8,9,10
  // 1.next = 1.next.next (3)
  // 2.next = 2.next.next (4)
  // those need new nexts
  // 3.next = 2

  // keep the odd index 3

  // 3.next = 5
  // 5.next = 2

  // ALL ODDS AFTER HAVE THIS PATTERN

  // lastOdd.next = newOddIndex
  // newOddIndex.next = 2nd index

  // EVEN PATTERN?

  // 4 = last even
  // 6 comes up
  // 4.next = 6
  // lastEven = 6

  // 4.next = 6
  // 5.next = 7
  // 7.next = 2
  // 6.next = 8
  // 7.next = 9
  // 9.next = 2
  // 8.next = 10
  // 1,3,2,4,5 ,  6, 7, 8, 9, 10
  //

  // 1.next = 1.next.next
  // 2.next = 2.next.next
  // 1,3,2,4    5
  //
  // 1,3,2,4,5,6,7,8,9,10

  // needs to connect to the first even always
  let lastOccuringOdd;
  let newOccuringOdd;
  // always needs to stay because it will be the next of lastOccuringOdd;
  let firstOccurringEven;
  let lastOccurringEven;

  let sentinel = { val: 0, next: head };
  sentinel = sentinel.next;
  lastOccuringOdd = sentinel;
  let index = 1;
  // set up pattern to start?
  newOccuringOdd = sentinel.next.next;
  firstOccurringEven = sentinel.next;
  lastOccuringOdd.next = newOccuringOdd;
  firstOccurringEven.next = newOccuringOdd.next;
  newOccuringOdd.next = firstOccurringEven;
  lastOccurringEven = firstOccurringEven;
  lastOccuringOdd = newOccuringOdd;
  sentinel = sentinel.next.next;

  // 2nd -> 4th
  index = 4;
  while (sentinel) {
    sentinel = sentinel.next;

    if (sentinel && index % 2 === 0) {
      lastOccurringEven.next = sentinel;
      lastOccurringEven = sentinel;
    }

    if (sentinel && index % 2 === 1) {
      newOccuringOdd = sentinel;
      // effed here
      lastOccuringOdd.next = newOccuringOdd;
      if (!newOccuringOdd.next) {
        lastOccurringEven.next = null;
      }
      newOccuringOdd.next = firstOccurringEven;
    }

    index++;

    // fourth
    // ALL ODDS AFTER HAVE THIS PATTERN

    // lastOdd.next = newOddIndex
    // newOddIndex.next = 2nd index

    // EVEN PATTERN?

    // 4 = last even
    // 6 comes up
    // 4.next = 6
    // lastEven = 6
  }
  console.log(head);
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};
console.log(OddEvenList(head));
