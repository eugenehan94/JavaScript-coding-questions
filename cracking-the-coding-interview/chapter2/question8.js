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


function detectAndRemove(head) {

  // If list is empty or has only one node - no loop
  if (head === null || head.next === null){
    return null;
  }

  let slow = head;
  let fast = head;

  // Move slow and fast 1 and 2 steps ahead respectively
  slow = slow.next;
  fast = fast.next.next;

  // Search for loop using slow and fast pointers
  

}