//Given the head of a linked list, remove the nth node from the end of the list and return its head.

function removeNthFromEnd(head, n) {
  if (!head.next) {
    return null;
  }
  n = n - 1;
  let fast = head.next;
  let slow = head;
  let countFast = 2;
  let countSlow = 1;
  let b4;
  while (fast) {
    fast = fast?.next;
    if (fast) {
      countFast++;
    }
    fast = fast?.next;
    if (fast) {
      countFast++;
    }
    if (!fast) {
      b4 = slow;
    }
    slow = slow.next;
    countSlow++;
  }
  let diff = countFast - n;
  if (diff >= countSlow) {
    while (diff > countSlow) {
      slow = slow?.next;
      b4 = b4?.next;
      countSlow++;
    }
    b4.next = slow.next;
    return head;
  } else {
    if (diff === 1) {
      head = head.next;
      return head;
    }
    let count = 1;
    let slow = head;
    let b4 = head;
    while (count < diff) {
      slow = slow.next;
      count++;
      if (count < diff) {
        b4 = b4.next;
      }
    }
    b4.next = slow.next;
    return head;
  }

  // slow = countSlow -1
  // fast = countFast
  // countFast - n  === what needs to be removed
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

// WORKS
//removeNthFromEnd(head, 2);

// Input: (head = [1, 2]), (n = 1);
// Output: [1];

let head2 = { val: 1, next: { val: 2, next: null } };

// WORKS
//console.log(removeNthFromEnd(head2, 1));

let head3 = { val: 1, next: null };

// WORKS
// null
//console.log(removeNthFromEnd(head3, 1));

// what is diff isn't greater than slow???
// works
// WORKS
// 1,2,4,5
//console.log(removeNthFromEnd(head, 3));

// what about 4?
// WORKS
// 1,3,4,5
//console.log(removeNthFromEnd(head, 4));

// 2,3,4,5
console.log(removeNthFromEnd(head, 5));
