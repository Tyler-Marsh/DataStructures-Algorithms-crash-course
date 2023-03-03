// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Implement the MovingAverage class:

// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.

// initialize size of the window
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.queue = [];
  this.size = size;
  this.total = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  let last = 0;
  if (this.queue.length === this.size) {
    last = this.queue.shift();
    this.total -= last;
  }
  this.queue.push(val);
  this.total += val;
  return this.total / this.queue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

let movingAverage = new MovingAverage(3);

console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // return 6.0 = (10 + 3 + 5) / 3
