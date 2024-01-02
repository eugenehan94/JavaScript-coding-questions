/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

console.log("-----------Approach 1-------------");
/*
 Using hasing
 Idea of approach
    Traverse the link list from head to end
    For every newly encounted element, check whether if it is in the hash table
        if yes, remove it
        otherwise put it in the hash table
    At the end, the hash table will contain only the unique elements

*/
/*
Time complexity: O(N) on average (assuming the hash table access time is O(1) on average)
Auxiliary Space: O(N), as extra space is used to store the elements in the stack
*/
function removeDuplicates(head) {
  let hashTable = new Set();

  // Traverse list and select each elements
  let current = head;
  let previous = null;
  while (current !== null) {
    let currentValue = current.val;

    // If current value has occurred before
    if (hashTable.has(currentValue)) {
      previous.next = current.next;
    } else {
      hashTable.add(currentValue);
      previous = current;
    }
    current = current.next;
  }
}

/* Function to print nodes in a 
    given linked list */
function printList(head) {
  while (head !== null) {
    console.log(head.val + " ");
    head = head.next;
  }
}

let test = new Node(10);
test.next = new Node(12);
test.next.next = new Node(11);
test.next.next.next = new Node(11);
test.next.next.next.next = new Node(12);
test.next.next.next.next.next = new Node(11);
test.next.next.next.next.next.next = new Node(10);

console.log("Linked list before removing duplicates: ");
printList(test);

console.log("Linked list after removing: ");
removeDuplicates(test);
printList(test);

console.log("-------Approach 2-------");
/*
No buffer
then we traverse the linked list and remove any duplicates.

create two pointers.
    one pointer stay on selected Node value
    pointer two to traverse the list
compare the values of the two pointers
    if duplicate
*/

function remove_duplicates(head) {
  let pointer1 = null;
  let pointer2 = null;
  // let duplicate = null;

  pointer1 = head;
  while (pointer1 !== null && pointer1.next !== null) {
    pointer2 = pointer1;

    // Compare the picked element with rest of the element
    while (pointer2.next !== null) {
      // If duplicate found then delete it
      if (pointer1.val === pointer2.next.val) {
        // Sequence of steps is important here
        // duplicate = pointer2.next;
        pointer2.next = pointer2.next.next;
      } else {
        pointer2 = pointer2.next;
      }
    }
    pointer1 = pointer1.next;
  }
}

function printList2(node) {
  while (node !== null) {
    console.log(node.val + " ");
    node = node.next;
  }
}

let head = new Node(10);
head.next = new Node(12);
head.next.next = new Node(11);
head.next.next.next = new Node(11);
head.next.next.next.next = new Node(12);
head.next.next.next.next.next = new Node(11);
head.next.next.next.next.next.next = new Node(10);

console.log("Linked List before removing duplicates :")
printList2(head)
remove_duplicates(head);
console.log("Linked List after removing duplicates :")
printList2(head)