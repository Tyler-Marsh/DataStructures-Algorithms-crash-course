function even(head) {
  // how is this changing head?
  function reverse(start, end, head) {
    console.log(head);
    if (start == null || start == end) return null;
    let curr = start.next;
    let prev = null;
    let returnNode = start.next;
    let next;
    while (curr != end) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // changes head directly
    if (start.next != null) {
      // if not the end of the Linked List
      // start.next.next =
      // start.next.next === the tail of the reversed list
      // this puts the next segment in line
      // connecting nodes solution
      // previous of reverse.next.next = section to connect
      start.next.next = end;
      // attach the head of reverse list to the tail of the
      // prior segment
      // attach the actual reversed section to the prior
      start.next = prev;
    }
    return returnNode;
  }

  let len = 1;
  let start = null;
  let end = head;
  let prev = null;
  let l;
  while (end != null) {
    l = 1;
    // start on previous -> for example before window of group
    start = prev;
    while (l <= len && end != null) {
      // sliding the window left to right
      prev = end;
      end = end.next;
      l++;
    }
    if ((l - 1) % 2 == 0) {
      //store new start Node
      prev = reverse(start, end, head);
    }
    len++;
  }
  return head;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

even(head);

// even({
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: {
//             val: 6,
//             next: { val: 7, next: { val: 8, next: null } },
//           },
//         },
//       },
//     },
//   },
// });
