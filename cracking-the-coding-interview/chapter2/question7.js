/*
Given two (singly) linked lists, determine if the two lists intersect. Return
the intersecting node. Note that the intersection is defined based on reference,
not value. That is, if the kth node of the first linked list is the exact same
node (by reference) as the jth node of the second linked list, then they are
intersecting.
*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

console.log("-------Approach 1 (Website)---------");

/*
In this method, we find the difference (D) between the count of nodes in both 
the lists. Then, we increment the start pointer of the longer list by D nodes. 
Now, we have both start pointers at the same distance from the intersection 
point, so we can keep incrementing both the start pointers until we find the 
intersection point.

Get the count of the nodes in the first list, let the count be c1.
Get the count of the nodes in the second list, let the count be c2.
Get the difference of counts d = abs(c1 – c2)
Now traverse the bigger list from the first node to d nodes so that 
from here onwards both the lists have an equal no of nodes
Then we can traverse both lists in parallel till we come across a 
common node. (Note that getting a common node is done by comparing the address of the nodes)

NOTE: This uses the node data, althought the question states not to.
Time complexity: O(m+n);
Auxiliary space: O(1);
*/

let head1;
let head2;

head1 = new Node(3);
head1.next = new Node(6);
head1.next.next = new Node(9);
head1.next.next.next = new Node(15);
head1.next.next.next.next = new Node(30);
// Create second linked list
head2 = new Node(10);
head2.next = new Node(15);
head2.next.next = new Node(30);

function getNode() {
  let c1 = getCount(head1);
  let c2 = getCount(head2);

  let d;

  if (c1 > c2) {
    d = c1 - c2;
    return _getIntesectionNode(d, head1, head2);
  } else {
    d = c2 - c1;
    return _getIntesectionNode(d, head2, head1);
  }
}

function getCount(node) {
  let current = node;
  let count = 0;

  while (current != null) {
    count++;
    current = current.next;
  }

  return count;
}

function _getIntesectionNode(d, node1, node2) {
  let i;
  let current1 = node1;
  let current2 = node2;
  for (i = 0; i < d; i++) {
    if (current1 == null) {
      return -1;
    }
    current1 = current1.next;
  }
  while (current1 != null && current2 != null) {
    if (current1.data == current2.data) {
      return current1.data;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return -1;
}

console.log(getNode());

console.log("--------Approach 2 (Website) ------------");
/*
Use 2 nested for loops. The outer loop will be for each node of the 1st 
list and the inner loop will be for the 2nd list. In the inner loop, 
check if any of the nodes of the 2nd list is the same as the current 
node of the first linked list. The time complexity of this method will 
be O(M * N) where m and n are the numbers of nodes in two lists.
*/

function getIntesectionNode(head1, head2) {
  while (head2) {
    let temp = head1;
    while (temp) {
      if (temp == head2) {
        return head2;
      }
      temp = temp.next;
    }
    head2 = head2.next;
  }
  return null;
}

let newNode = new Node();
 
let headOne = new Node();
headOne.data = 10;
 
 
let headTwo = new Node();
headTwo.data = 3;
 
newNode = new Node();
newNode.data = 6;
headTwo.next = newNode;
 
newNode = new Node();
newNode.data = 9;
headTwo.next.next = newNode;
 
newNode = new Node();
newNode.data = 15;
headOne.next = newNode;
headTwo.next.next.next = newNode;
 
newNode = new Node();
newNode.data = 30;
headOne.next.next = newNode;
 
headOne.next.next.next = null;
 
let intersectionPoint = getIntesectionNode(headOne, headTwo);
 
if (!intersectionPoint)
    console.log(" No Intersection Point");
else
    console.log("Intersection Point: ", intersectionPoint.data);
