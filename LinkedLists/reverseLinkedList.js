// Given the head of a singly linked list, reverse the list, and return the reversed list.

let head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};

function reverseLink(head) {
  let nextNode;
  let prev = null;
  let curr = head;
  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

console.log(reverseLink(head));
