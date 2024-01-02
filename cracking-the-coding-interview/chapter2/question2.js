/*
Return Kth to Last: Implement an algorithm to find the Kth to last element
of a singly linked list.
*/

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

const myAttempt = (targetElement, list) => {
  // Given the kth element and list
  // Create two pointers, one to find the Kth element.
  // The second will start at the Kth element and move towards end of list.
  // The second pointer will have counter to keep track of interations till end
  // NOTE: Incorrect solution to question. We calculated the amount of nodes from the
  // target to last element. Question wants to find the node from the last element
  // (Kth nodes from the last node)
  let pointer1 = null;
  let pointer2 = null;
  let count = 0;
  let found = false;

  pointer1 = list;
  
  while (pointer1 !== null && pointer1.next !== null) {
    if (pointer1.element === targetElement) {
      pointer2 = pointer1;
      found = true;
    }
    pointer1 = pointer1.next;
  }

  if (found) {
    while (pointer2.next !== null) {
      count++;
      pointer2 = pointer2.next;
    }
    return count;
  }

  return -1;
};

let test = new Node(1);
test.next = new Node(2);
test.next.next = new Node(3);
test.next.next.next = new Node(4);
test.next.next.next.next = new Node(5);

console.log(myAttempt(3, test));


console.log("------Approach 1 ---------")
/*
Use two pointers and place them K apart. Then move them at same pace, when
furthest pointer hits the end the other pointer will be at the correct node.

This algorithm takes O(n) time and O(1) space.
*/

function nthToLast (list, k){
  let pointer1 = list;
  let pointer2 = list;

  // Move pointer1 K nodes into the list
  for (let i = 0; i < k; i++){
    if (pointer1 === null) return null; // Out of bounds
    pointer1 = pointer1.next;
  }

  // Move pointers at the same pace. When pointer1 hits the end,
  // pointer2 will be at the right element
  while (pointer1 !== null){
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


console.log(nthToLast(head, 4));

