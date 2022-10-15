const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

/*function showList(h) {
  console.log(h);
  h.next == null ? console.log('end') : showList(h.next);
}*/

function remove(l, k){
  if(l.next !== null) {
    if(l.next.value == k) {
      if(l.next.next == null){
        l.next = null; //end
      }
      else{
        remove(l.next,k);
        l.next = l.next.next;
      }
    }
    else {
        remove(l.next,k);
    }
  }
}

function removeKFromList(l, k) {
  //showList(l);
  while(l.value == k) {
    l = l.next;
  }
  let head = l;
  remove(l, k);
  //showList(head);
  return head;
}

module.exports = {
  removeKFromList
};
