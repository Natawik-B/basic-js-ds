const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
}

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head ) {
      this.head= new Node (value);
      this.length=1;
      return this;
    };
    
    let item = this.head;
    for (let i = 1; i < this.length; i++) {
      item = item.next;
    }
    item.next = new Node (value);
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.head ) {
      return null;
    };
    
    let item = this.head;
    let item2 = item.value;
    if (!item.next) {
      this.head = null;
      this.length = 0;
    } else {
      this.head = item.next;
      this.length --;
    } return item2;
  }
}

module.exports = {
  Queue
};
