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

if (!intersectionPoint) console.log(" No Intersection Point");
else console.log("Intersection Point: ", intersectionPoint.data);

console.log("-----------Approach 3 (Website) ----------------");
/*
Basically, we need to find a common node of two linked lists. So, 
we store all the nodes of the first list in a hash set and then 
iterate over second list checking if the node is present in the set. 
If we find a node which is present in the hash set, we return the node.

Step-by-step approach:
Create an empty hash set.
Traverse the first linked list and insert all nodes’ addresses 
in the hash set.
Traverse the second list. For every node check if it is present 
in the hash set. If we find a node in the hash set, return the node.

Time complexity: O(n) where n is the length of the longer list. 
This is because we need to traverse both of the linked lists in 
order to find the intersection point.
Auxiliary: O(n), because we are using unordered set.
*/

function Print(n) {
  let cur = n;
  while (cur !== null) {
    console.log(cur.data + " ");
    cur = cur.next;
  }
}
function MegeNode(n1, n2) {
  let hs = new Set();

  while (n1 !== null) {
    hs.add(n1);
    n1 = n1.next;
  }
  while (n2 !== null) {
    if (hs.has(n2)) {
      return n2;
    }
    n2 = n2.next;
  }
}

let n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(3);
n1.next.next.next = new Node(4);
n1.next.next.next.next = new Node(5);
n1.next.next.next.next.next = new Node(6);
n1.next.next.next.next.next.next = new Node(7);

let n2 = new Node(10);
n2.next = new Node(9);
n2.next.next = new Node(8);
n2.next.next.next = n1.next.next.next;

// Print(n1);
// Print(n2);

console.log(MegeNode(n1, n2).data);

console.log("-------------Approach 4 (Textbook) ----------------");

/*

*/

function findIntersection(list1, list2) {
  if (list1 === null || list2 === null) {
    return null;
  }

  // Get tail and sizes
  let result1 = getTailAndSize(list1);
  let result2 = getTailAndSize(list2);

  // If different tail nodes, then there's no intersection
  if (result1.tail !== result2.tail) {
    return null;
  }

  // Set pointers to the start of each linked list.
  let shorter = result1.size < result2.size ? list1 : list2;
  let longer = result1.size < result2.size ? list2 : list1;

  // Advance the pointer for the longer linked list by difference in lengths
  longer = getKthNode(longer, Math.abs(result1.size - result2.size));

  // Move both pointers until you have a collision
  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }
  //Return either one
  return longer;
}

function getKthNode(head, k) {
  let current = head;
  while (k > 0 && current !== null) {
    current = current.next;
    k--;
  }
  return current;
}

function getTailAndSize(list) {
  if (list === null) {
    return null;
  }
  let size = 1;
  let current = list;

  while (current.next !== null) {
    size++;
    current = current.next;
  }
  return new Result(current, size);
}

class Result {
  constructor(tail, size) {
    this.tail = tail;
    this.size = size;
  }
}

console.log(findIntersection(n1, n2));
