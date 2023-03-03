// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

/// store a reference to current min. that way when the new min is deleted it will
// be tracked within the list

var MinStack = function () {
  // 0 = val, 1 = min known
  this.stack = [];
  this.minList = [];
  this.min;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // reorder for the getMin??
  if (this.stack.length === 0) {
    this.min = val;
    this.stack.push([val, this.min]);
    return;
  }
  this.min = Math.min(this.min, val);
  this.stack.push([val, this.min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let poppedArr = this.stack.pop();
  if (poppedArr[1] === this.min) {
    this.min = this.stack[this.stack.length - 1][1];
  }
  return poppedArr[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
