/*
Delete Middle Node: Implement an algorithm to delete a node in the middle
(i.e., any node but the first and last, not necessarily the exact middle)
of a singly linked list, given only access to that node.

EXAMPLE
Input: the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like
        a->b->d->e->f
*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const myAttempt = (list, removeElement) => {
  // last Node next will always be null - singly linked list
  // first Node next next will be null if only two nodes present
  // Two pointers - one at head position and one at head + 1 position
  // use two pointers to check first two conditions above - if true - return false;
  // Traverse the two pointers at same pace until pointer (head + 1 position) finds
  // target element. If pointer (head+1 position) next is null - don't delete, else
  // remove.
  // NOTE: only have access to the node to delete
};

let test = new Node("a");
test.next = new Node("b");
test.next.next = new Node("c");
test.next.next.next = new Node("d");
test.next.next.next.next = new Node("e");

console.log(myAttempt(test, "c"));


console.log('------Approach 1 (textbook)--------')

function deleteNode(n){
    if (n === null || n.next === null){
        return false; // failure
    }

    next = n.next;
    n.data = next.data;
    n.next = next.next;
    return true;
}