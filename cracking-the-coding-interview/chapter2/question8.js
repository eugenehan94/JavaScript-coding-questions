/*
Loop Detection: Given a circular linked list, implement an algorithm that
returns the node at the beginning of the loop.

Definition:
Circular linked list: A (corrupt) linked list in which a node's next pointer
points to an earlier node, so as to make a loop in the linked list.

Example
input: A->B->C->D->E->C (the same C as earlier)
output: C

*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const myAttempt = (list) => {

  /*
  
  */

  let set = new Set();

  set.add(list.next);
  console.log("set: ", set)

}


let test = new Node("A");
test.next = new Node("B");
test.next.next = new Node("C");
test.next.next.next = new Node("D");
test.next.next.next.next = new Node("E");
test.next.next.next.next.next = test.next.next;

console.log(myAttempt(test));