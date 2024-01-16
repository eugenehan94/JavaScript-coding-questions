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

let test = new Node("A");
test.next = new Node("B");
test.next.next = new Node("C");
test.next.next.next = new Node("D");
test.next.next.next.next = new Node("E");
test.next.next.next.next.next = test.next.next;


console.log("------Approach 1 (Website) ---------")

/*
1. If a loop is found, initialize a slow pointer to head, let fast pointer be at its position. 
2. Move both slow and fast pointers one node at a time. 
3. The point at which they meet is the start of the loop.
*/


