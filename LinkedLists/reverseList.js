function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

let head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};

console.log(reverseList(head));

console.log(head);

function reverse(head) {
  let prev = null;
  let curr = head;
  let nextNode;
  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
}
