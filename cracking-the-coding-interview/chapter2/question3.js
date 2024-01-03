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

console.log("------Approach 1 (textbook)--------");

function deleteNode(n) {
  if (n === null || n.next === null) {
    return false; // failure
  }

  next = n.next;
  n.data = next.data;
  n.next = next.next;
  return true;
}

console.log("------Approach 2 (Website) --------");
/*
 Simple solution: first count the number of nodes in a linked list,
 then delete n/2 node using the simple deletion process.

 Time complexity: O(n) - Two traversals of the linked list are needed
 Auxiliary space: O(1) - No extra space is needed
*/

function countOfNodes(head) {
  let count = 0;
  while (head != null) {
    head = head.next;
    count += 1;
  }
  return count;
}

function deleteMid(head) {
  // Base case
  if (head == null) {
    return null;
  }
  if (head.next == null) {
    return null;
  }

  let copyHead = head;

  // Find the count of nodes
  let count = countOfNodes(head);

  // Find the middle node
  let mid = parseInt(count / 2);

  // Delete the middle node
  while (mid-- > 1) {
    head = head.next;
  }
  head.next = head.next.next;

  return copyHead;
}

// A utility function to print
// a given linked list
function printList(ptr) {
  while (ptr != null) {
    console.log(ptr.data);
    ptr = ptr.next;
  }
  console.log("NULL<br/>");
}

let test2 = new Node("a");
test2.next = new Node("b");
test2.next.next = new Node("c");
test2.next.next.next = new Node("d");
test2.next.next.next.next = new Node("e");

printList(test2);
test2 = deleteMid(test2);
console.log("After removing mid");
printList(test2);

console.log("-------Approach 3 (Website) --------");
/*
Efficient solution: Use two pointers, slow_ptr and fast_ptr. Both pointers
start at the head node. When fast_ptr reaches the end, the slow_ptr reaches
the middle
*/

function deleteMiddle(head) {
  // Base cases
  if (head == null) {
    return null;
  }
  if (head.next == null) {
    return null;
  }

  // Initialize slow and fast pointers to
  // reach middle of linked list
  let slow_ptr = head;
  let fast_ptr = head;

  // Find the middle and previous of middle
  let prev = null;

  // To store previous of slow_ptr
  while (fast_ptr != null && fast_ptr.next != null) {
    fast_ptr = fast_ptr.next.next;
    prev = slow_ptr;
    slow_ptr = slow_ptr.next;
  }

  // Delete the middle node
  prev.next = slow_ptr.next;

  return head;
}
let test3 = new Node("a");
test3.next = new Node("b");
test3.next.next = new Node("c");
test3.next.next.next = new Node("d");
test3.next.next.next.next = new Node("e");
printList(test3)
test3 = deleteMiddle(test3);
console.log("After middle is removed: ")
printList(test3)
