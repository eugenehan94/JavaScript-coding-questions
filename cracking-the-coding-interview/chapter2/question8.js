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

console.log("------Approach 1 (Website) ---------");

/*
1. If a loop is found, initialize a slow pointer to head, let fast pointer be at its position. 
2. Move both slow and fast pointers one node at a time. 
3. The point at which they meet is the start of the loop.

Time complexity: O(n), where n is length of array
Auxiliary space: O(1)
*/

function detectAndRemove(head) {
  // If list is empty or has only one node - no loop
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  // Move slow and fast 1 and 2 steps ahead respectively
  slow = slow.next;
  fast = fast.next.next;

  // Search for loop using slow and fast pointers
  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      break;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  // If loop doesn't exist
  if (slow !== fast) {
    return null;
  }

  // If loop exists. Start slow from head and fast
  // from meeting point.
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

console.log(detectAndRemove(test));

console.log("---------Approach 2 (Website)-----------");

/*
In this method, a temporary node is created. The next pointer 
of each node that is traversed is made to point to this temporary 
node. This way we are using the next pointer of a node as a flag to 
indicate whether the node has been traversed or not. Every node is 
checked to see if the next is pointing to a temporary node or not. 
In the case of the first node of the loop, the second time we traverse 
it this condition will be true, hence we return that node. 
The code runs in O(n) time complexity and uses constant memory space.

Steps to solve this problem:
1.) Create a temporary node and a pointer temp.
2.) While head is not null:
*Check if head -> next is null then return null.
*Check if head -> next is temp than break.
*Create a next pointer to a node and point it to head -> next.
*Point head -> next to temp.
*Update head to next.

Return head.

*/

function detectLoop(head) {
  // Create a temporary node
  temp = new Node();

  while (head !== null) {
    // This condition is for the case when there is no loop
    if (head.next === null) {
      return null;
    }

    // Check if next is already pointing to temp
    if (head.next === temp) {
      break;
    }
    // Store the pointer to the next node in order to get to it
    // in the next step
    next = head.next;
    // Make next pointer to temp
    head.next = temp;
    // Get the next node in the list
    head = next;
  }
  return head;
}

console.log(detectLoop(test));

console.log("----------Approach 3 (Website)----------------");

/*
We can also use the concept of hashing in order to detect the first node 
of the loop. The idea is simple just iterate over the entire linked list 
and store node addresses in a set(C++ STL) one by one, while adding the 
node address into the set check if it already contains that particular 
node address if not then add node address to set if it is already present 
in the set then the current node is the first node of the loop.

*/

let test2 = new Node("A");
test2.next = new Node("B");
test2.next.next = new Node("C");
test2.next.next.next = new Node("D");
test2.next.next.next.next = new Node("E");
test2.next.next.next.next.next = test2.next.next;

function detectCycle(A) {
  // declare map to store node address
  let uset = new Set();

  let ptr = A;
  // Default consider that no cycle is present
  while (ptr !== null) {
    // checking if address is already present in map
    if (uset.has(ptr)) {
      return ptr;
    }
    // if address not present then insert into the set
    else {
      uset.add(ptr);
    }
    ptr = ptr.next;
  }
  return null;
}

console.log(detectCycle(test2));

console.log("---------Approach 4 (textbook) ------------");

function FindBeginning(head) {

  let slow = head;
  let fast = head;

  // Find meeting point. This will be LOOP_SIZE - k steps into the linked list
  while (fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
    // Collision
    if (slow === fast){
      break;
    }
  }
  // Error check - no meeting point, and therefore no loop
  if (fast === null || fast.next === null){
    return null;
  }
  // Move slow to Head. Keep fast at Meeting Point. Each are k steps from
  // the Loop Start. If they move at the same pace, they must meet at Loop
  // Start.
  slow = head;
  while (slow !== fast){
    slow = slow.next;
    fast = fast.next;
  }

  // Both now point to the start of the loop.
  return fast;
}

console.log(FindBeginning(test2))