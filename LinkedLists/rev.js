let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

function rev(head) {
  // store values
  let prev = null;
  let nextNode;
  let curr = head;
  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

//console.log(rev(head));

// Input: (head = [1, 2, 3, 4, 5]), (left = 2), (right = 4);
// Output: [1, 4, 3, 2, 5];
function reverseLink(head, left, right) {
  if (head == null) {
    return null;
  }

  let cur = head;
  let prev = null;
  // move two pointers until they reach the proper starting point;
  while (left > 1) {
    prev = cur;
    cur = cur.next;
    left--;
    right--;
  }

  // Two pointers that fix the final connection

  //
  let con = prev;
  let tail = cur;

  // Iteratively reverse the nodes until n becomes 0

  let third = null;
  while (right > 0) {
    third = cur.next;
    cur.next = prev;
    prev = cur;
    cur = third;
    right--;
  }

  if (con != null) {
    con.next = prev;
  } else {
    head = prev;
  }
  tail.next = cur;
  return head;
}

console.log(reverseLink(head, 2, 4));
