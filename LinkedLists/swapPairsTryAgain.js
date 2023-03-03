function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = head;
  let prev;
  let next = head.next;
  let nextNode;
  while (head && head.next) {
    nextNode = head.next.next;
    prev = head;
    head = head.next;
    head.next = prev;
    prev.next.next = nextNode;

    head = nextNode;
  }
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: null } },
  },
};

console.log(swapPairs(head));
