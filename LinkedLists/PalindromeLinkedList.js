// Given the head of a singly linked list, return true if it is a
//palindrome
//or false otherwise.
function PalindromLink(head) {
  if (!head || !head.next) {
    return true;
  }
  let ar = [];
  let curr = head;
  while (curr) {
    ar.push(curr.val);
    curr = curr.next;
  }
  let left = 0;
  let right = ar.length - 1;
  while (left < right) {
    if (ar[left] !== ar[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 2, next: { val: 1, next: null } },
  },
};

let head1 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

PalindromLink(head);
PalindromLink(head1);
