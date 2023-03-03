// Input: head = [1,1,0,6,5]
// Output: [1,0,1,5,6]

function reverseNodesEven(head) {
  if (!head || !head.next) {
    return head;
  }
  let groupSize = 1;
  let groupSizeRemaining = 0;
  let prev;
  let curr = head;
  let nextNode;

  // have to simply become the tails/heads of the next items
  let lastHeadEven;
  let lastHead;
  let lastTail;
  let currentTail;
  let currentHead;
  let reverse = true;

  let lastLastHead;
  let lastForward = true;

  let count = 0;
  let dummy = head;

  // need to update the currentHead/lastHead before other if statement

  while (dummy) {
    count++;
    dummy = dummy.next;
  }
  while (curr) {
    reverse = count - groupSize > 0 && groupSize % 2 == 0;
    if (count - groupSize < 0) {
      reverse = count % 2 === 0;
    }
    count -= groupSize;

    if (reverse) {
      prev = null;
      // overwriting the last tail
      // lastTail now is 6
      // curr is seven
      // where do I connect?
      // lastTail is 6,7
      // then curr is 7,8...
      // head is 1,3,2  4,5,6,7,8,
      //
      lastTail = currentTail;
      currentTail = curr;
      // last head and tail?
      // save 0???

      // TRAP VALUE 1
      while (groupSizeRemaining && curr) {
        nextNode = curr.next;
        if (groupSizeRemaining === 1 || !curr.next) {
          lastLastHead = curr;
        }
        curr.next = prev;
        prev = curr;

        curr = nextNode;
        groupSizeRemaining--;
      }

      // lastHead???
      lastTail.next = prev;
      lastHead = currentTail;
      groupSize++;
      groupSizeRemaining = groupSize;
    } else {
      groupSizeRemaining = groupSize;

      currentHead = curr;
      lastTail = currentTail;
      while (groupSizeRemaining && curr) {
        currentTail = curr;
        curr = curr.next;
        groupSizeRemaining--;
      }
      /* IF I NEED TO CONNECT DO IT HERE */
      // last tail...
      // lastHead.next = null??
      // if lastTail then connect them?
      // if
      groupSize++;
      groupSizeRemaining = groupSize;
    }
  }
  return head;
}

let head = {
  val: 1,
  next: {
    val: 1,
    next: { val: 0, next: { val: 6, next: { val: 5, next: null } } },
  },
};

function reverse(head, count) {
  let prev = null;
  let nextNode;
  let curr = head;
  let tail = curr;
  while (count > 0) {
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

// let res = reverse(
//   { val: 1, next: { val: 2, next: { val: 3, next: null } } },
//   3
// );

// console.log(
//   reverseNodesEven({
//     val: 1,
//     next: { val: 1, next: { val: 0, next: { val: 6, next: null } } },
//   })
// );

/* I DON"T SEET IT WORKING BECAUSE IT ENDS ON AN EVEN */

console.log(
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
            next: {
              val: 6,
              next: { val: 7, next: { val: 8, next: { val: 9, next: null } } },
            },
          },
        },
      },
    },
  })
);
// console.log(
//   reverseNodesEven({
//     val: 5,
//     next: {
//       val: 2,
//       next: {
//         val: 6,
//         next: {
//           val: 3,
//           next: {
//             val: 9,
//             next: {
//               val: 1,
//               next: {
//                 val: 7,
//                 next: {
//                   val: 3,
//                   next: { val: 8, next: { val: 4, next: null } },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   })
// );

//console.log(reverseNodesEven({ val: 1, next: null }));

//console.log(reverseNodesEven({ val: 1, next: { val: 2, next: null } }));
// let nextNode = curr.next; // first, make sure we don't lose the next node
//         curr.next = prev;         // reverse the direction of the pointer
//         prev = curr;              // set the current node to prev for the next node
//         curr = nextNode;

// console.log(
//   reverseNodesEven({
//     val: 1,
//     next: {
//       val: 1,
//       next: { val: 0, next: { val: 6, next: { val: 5, next: null } } },
//     },
//   })
// );
