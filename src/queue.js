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
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
   /*while(this.head!== null) {
    console.log(this.head);
    this.head = this.head.next;
   }*/
   return this.head;
  }

  enqueue(value) {
    let n = new ListNode(value);
    if(this.head == null) {
      this.head = n;
    }
    else {
      if(this.tail == null) {
        this.tail = n;
        this.head.next = n;
      }
      else {
        let buf = this.tail;
        this.tail = n;
        buf.next = n;
      }
    }
  }

  dequeue() {
    let buf = this.head;
    this.head = this.head.next;
    return buf.value;
  }
}

module.exports = {
  Queue
};
