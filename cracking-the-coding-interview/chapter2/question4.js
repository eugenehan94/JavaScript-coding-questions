/*
Partition: Write code to partition a linked list around a value x, such that all
nodes less than x come before all nodes greater than or equal to x. If x is
contained within the list, the values of x only need to be after the elements
less than x (see below). The partition element x can appear anywhere in the 
"right partition"; it does not need to appear between the left and right partitions.

EXAMPLE:
input: 3->5->8->5->10->2->1 [partition = 5]
output: 3->1->2->10->5->5->8
*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

console.log("-------Approach 1 (Website) ---------");
/*
 Below is algorithm to solve this problem:
 -Initialize first and last nodes of below three linked list as Null
    1. Linked list of values smaller than x.
    2. Linked list of values equal to x
    3. Linked list of values greater than x
 -Now iterate through the original linked list. 
  If a node’s value is less than x then append it at the end of the smaller list. 
  If the value is equal to x, then at the end of the equal list. And if a value 
  is greater, then at the end of the greater list.
 -Concatenate three lists

Note: you could make solution shorter by incorporating equal with greater than

Time complexity: O(n) where n is the size of the linked list
Auxiliary space: O(n)

*/

// Function to make two separate lists and return head after concat
function partition(head, x) {
  // Initialize first and last nodes of the three linked list
  // 1.) Linked list of values smaller than x.
  // 2.) Linked list of values equal to x.
  // 3.) Linked list of values greater than x.

  let smallerHead = null;
  let smallerLast = null;
  let equalHead = null;
  let equalLast = null;
  let greaterHead = null;
  let greaterLast = null;

  // Now iterate original list and connect nodes to appropriate linked lists
  while (head != null) {
    // If current node is equal to x, append it to the list of x values
    if (head.data == x) {
      if (equalHead == null) {
        equalHead = equalLast = head;
      } else {
        equalLast.next = head;
        equalLast = equalLast.next;
      }
    }
    // If current node is less than x, append it to the list of
    // smaller values
    else if (head.data < x) {
      if (smallerHead == null) {
        smallerHead = smallerLast = head;
      } else {
        smallerLast.next = head;
        smallerLast = head;
      }
    }
    // Append to the list of greater values
    else {
      if (greaterHead == null) {
        greaterHead = head;
        greaterLast = head;
      } else {
        greaterLast.next = head;
        greaterLast = head;
      }
    }
    head = head.next;
  }

  // Fix end of greater linked list by making it null
  if (greaterLast != null) {
    greaterLast.next = null;
  }

  // Connect the three linked list

  // If the smaller list is empty
  if (smallerHead == null) {
    if (equalHead == null) {
      return greaterHead;
    }
    equalLast.next = greaterHead;
    return equalHead;
  }

  // If the smaller list is not empty and equal list is empty
  if (equalHead == null) {
    smallerLast.next = greaterHead;
    return smallerHead;
  }

  // If both smaller and equal list are non-empty
  smallerLast.next = equalHead;
  equalLast.next = greaterHead;
  return smallerHead;
}

/* Function to print linked list */
function printList(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
}

let head = new Node(10);
head.next = new Node(4);
head.next.next = new Node(5);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(50);

let x =3;
printList(head);
head = partition(head, x)
console.log("List after partition: ")
printList(head)
