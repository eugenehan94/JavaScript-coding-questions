/*
Palindrome: Implement a function to check if a linked list is a 
palindrome.
*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

console.log("-------Approach 1 (website)--------");
/*
The idea is to use a stack and push all the nodes into the stack, 
then again iterate over the linked list to validate if the linked 
list is palindrome or not.

Follow the steps below to solve the problem:
A simple solution is to use a stack of list nodes. This mainly involves 
three steps.
1) Traverse the given list from head to tail and push every 
visited node to stack.
2.) Traverse the list again. For every visited node, pop a node 
from the stack and compare data of popped node with the currently visited node.
3.)If all nodes matched, then return true, else false.

Time complexity: O(n), iterate over the linked list of size n
Auxiliary space: O(n), using an auxiliary stack
*/

function isPalindrome(head) {
  let slow = head;
  let isPalin = true;
  let stack = [];

  // Initially traverse the entire linked list and store value in Stack
  while (slow !== null) {
    stack.push(slow.data);
    slow = slow.next;
  }

  // Compare the original linked list data to the ones in the Stack
  while (head !== null) {
    let i = stack.pop();
    if (head.data === i) {
      isPalin = true;
    } else {
      isPalin = false;
      break;
    }
    head = head.next;
  }
  return isPalin;
}

let test = new Node(1);
test.next = new Node(2);
test.next.next = new Node(3);
test.next.next.next = new Node(2);
test.next.next.next.next = new Node(1);

console.log(isPalindrome(test));

console.log("--------Approach 2 --------");
/*
The idea is to first reverse the second half part of the linked list 
and then check whether the list is palindrome or not.

Follow the steps below to solve the problem:
1.)Get the middle of the linked list. 
2.) Reverse the second half of the linked list. 
3.) Check if the first half and second half are identical. 
4.) Construct the original linked list by reversing the second 
half again and attaching it back to the first half
*/

// Function to check if given linked list is palindrome or not
var head;
var slow_ptr, fast_ptr, second_half;

// Function to check if given linked list
// is palindrome or not
function isPalindrome(head) {
  slow_ptr = head;
  fast_ptr = head;
  var prev_of_slow_ptr = head;

  // To handle odd size list
  var midnode = null;

  // Initialize result
  var res = true;

  if (head != null && head.next != null) {
    // Get the middle of the list.
    // Move slow_ptr by 1 and fast_ptrr
    // by 2, slow_ptr will have the middle node
    while (fast_ptr != null && fast_ptr.next != null) {
      fast_ptr = fast_ptr.next.next;

      // We need previous of the slow_ptr for
      //  linked lists with odd elements
      prev_of_slow_ptr = slow_ptr;
      slow_ptr = slow_ptr.next;
    }

    // fast_ptr would become NULL when there are
    // even elements in the list and not NULL for
    // odd elements. We need to skip the middle
    // node for odd case and store it somewhere
    // so that we can restore the original list
    if (fast_ptr != null) {
      midnode = slow_ptr;
      slow_ptr = slow_ptr.next;
    }

    // Now reverse the second half and
    // compare it with first half
    second_half = slow_ptr;

    // NULL terminate first half
    prev_of_slow_ptr.next = null;

    // Reverse the second half
    reverse();

    // compare
    res = compareLists(head, second_half);

    // Construct the original list back
    // Reverse the second half again
    reverse();

    if (midnode != null) {
      // If there was a mid node (odd size case)
      // which was not part of either first half
      // or second half.
      prev_of_slow_ptr.next = midnode;
      midnode.next = second_half;
    } else prev_of_slow_ptr.next = second_half;
  }
  return res;
}

// Function to reverse the linked list.
// Note that this function may change the
// head
function reverse() {
  var prev = null;
  var current = second_half;
  var next;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  second_half = prev;
}

// Function to check if two input
// lists have same data
function compareLists(head1, head2) {
  var temp1 = head1;
  var temp2 = head2;

  while (temp1 != null && temp2 != null) {
    if (temp1.data == temp2.data) {
      temp1 = temp1.next;
      temp2 = temp2.next;
    } else return false;
  }

  // Both are empty return 1
  if (temp1 == null && temp2 == null) return true;

  //Will reach here when one is NULL
  //  and other is not
  return false;
}

// Push a node to the linked list.
// Note that this function changes the head
function push(new_data) {
  // Allocate the Node & Put in the data
  var new_node = new Node(new_data);

  // link the old list of the new one
  new_node.next = head;

  // Move the head to point to new Node
  head = new_node;
}

// A utility function to point a
// given linked list
function printList(ptr) {
  while (ptr != null) {
    console.log(ptr.data + "->");
    ptr = ptr.next;
  }
  console.log("NULL<br/>");
}

// Start with the empty list
var str = ["a", "b", "a", "c", "a", "b", "a"];
var string = str.toString();

for (i = 0; i < 7; i++) {
  push(str[i]);
  printList(head);
  if (isPalindrome(head) != false) {
    console.log("Is Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
