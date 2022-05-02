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
class Queue {
  constructor() {
    this.values = {};
    this.head = 0;
    this.length = 0;
    this.next = 0;
  }
  
  getUnderlyingList() {
    if (this.head) {
      return this.head;
    }
  }

  enqueue(value) { // добавление элемента в конец очереди
    let item = new ListNode(value);
    if (this.head === null) {
      this.head = item;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = item;
    }
    this.length++;
  }

  dequeue() { // удаление элемента из начала очереди
    let item = this.head;
    this.head = this.head.next;
    return item.value;
  }
}

module.exports = {
  Queue
};
