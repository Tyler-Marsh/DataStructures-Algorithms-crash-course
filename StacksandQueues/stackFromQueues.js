// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
  this.top1;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
  this.top1 = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.q1.length <= 1) {
    this.top1 = null;
    return this.q1.shift();
  }
  while (this.q1.length > 1) {
    this.top1 = this.q1.shift();
    this.q2.push(this.top1);
  }
  let popped = this.q1.shift();
  // where will I reset top in here?
  while (this.q2.length) {
    this.q1.push(this.q2.shift());
  }
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.top1;
  //   if (this.top) {
  //     return this.top;
  //   } else {
  // return this.q1[this.q1.length - 1];
  // }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top());
console.log(obj.pop());
console.log(obj.empty());

// top of 1
console.log(obj.top());

// 1,3
obj.push(3);

// 3
console.log("TOP: ", obj.top());

/// 1,3,1
obj.push(1);
// 1,3
obj.pop();
// 1
obj.pop();
//1
console.log("TOP: ", obj.top());

console.log("last pop?", obj.pop());
