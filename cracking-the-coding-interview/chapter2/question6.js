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
function isPalindrome2(head) {
//   let head;
  let slow_ptr;
  let fast_ptr;
  let second_half;
  let prev_of_slow_ptr = head;
  let midnode = null; // To handle odd size list
  let res = true; // initialize result;

  slow_ptr = head;
  fast_ptr = head;

  if (head !== null && head.next !== null) {
    // Get middle of the list. Move slow_ptr by 1 and fast_ptr by 2,
    // slow_ptr will have the middle node
    while (fast_ptr !== null && fast_ptr.next !== null) {
      fast_ptr = fast_ptr.next.next;
      // prev_of_slow_ptr for linked lists with odd elements
      prev_of_slow_ptr = slow_ptr;
      slow_ptr = slow_ptr.next;
    }
    // fast_ptr would become Null when there are even elements in the list
    // and not Null for odd elements. We will skip the middle node for odd
    // cases and store it somewhere so that we can restore the original list
    if (fast_ptr !== null) {
      midnode = slow_ptr;
      slow_ptr = slow_ptr.next;
    }

    // Now reverse the second half and compare it with the first half
    second_half = slow_ptr;
    prev_of_slow_ptr.next = null; // terminate first half
    reverse(); // Reverse the second half
    res = compareLists(head, second_half); // compare

    // Construct the original list back
    reverse(); // Reverse the second half again

    if (midnode !== null) {
      // If there is a mid node (odd size case) which was not
      // part of either first half or second half
      prev_of_slow_ptr.next = midnode;
      midnode.next = second_half;
    } else {
      prev_of_slow_ptr.next = second_half;
    }
  }
  return res;
}
