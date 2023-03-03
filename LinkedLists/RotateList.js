var rotateRight = function (head, k) {
  // what is proccess for moving everything to the right
  // so that the next becomes the beginning
  // base cases
};
// };
// The algorithm is quite straightforward :

// Find the old tail and connect it with the head old_tail.next = head to close the ring. Compute the length of the list n at the same time.

// Find the new tail, which is (n - k % n - 1)th node from the head and the new head, which is (n - k % n)th node.

// Break the ring new_tail.next = None and return new_head.
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

let head = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
};

rotateRight(head);
