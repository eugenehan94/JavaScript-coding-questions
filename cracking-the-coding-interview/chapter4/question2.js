/*
Minimal Tree: Given a sorted (increasing order) array with unique
integer elements, write an algorithm to create a binary search tree
with minimal height
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function myAttempt(test) {
  // binary search tree - all left descendents are less than primary node
  // and all right descendents are more than primary node. Each node has
  // 0 or 2 children.

  // Approach:
  // find mid point and assign as main/primary node of binary search tree
  // (even and odd arrays). Remove selected value from array.
  // Perform the same steps but with two halves of the initial array.

  if (test === null) {
    return console.log("array is empty");
  }

  let mid = Math.floor((test.length - 1) / 2);
  const primaryNode = new Node(test[mid]);
  let left = test.slice(0, mid).reverse();
  let right = test.slice(mid + 1, test.lenth);

  let leftBranch;
  for (let i = 0; i < left.length; i++) {
    const newNode = new Node(left[i]);

    if (leftBranch === undefined) {
      leftBranch = newNode;
    } else {
      leftBranch.left = newNode;
    }
  }
  // Attach the left branch to initial node, add to left side
  primaryNode.left = leftBranch;

  let rightBranch;
  for (let i = 0; i < right.length; i++) {
    const newNode = new Node(right[i]);
    if (rightBranch === undefined) {
      rightBranch = newNode;
    } else {
      // console.log("new Node: ", right[i]);
      console.log("right branch:", rightBranch);
      rightBranch.right = newNode;
      rightBranch = newNode;
    }
  }

  console.log("right branch: outside: ", rightBranch);
  primaryNode.right = rightBranch;
  return primaryNode;
}

let test = [1, 3, 5, 7, 10, 12];
let test2 = [1, 3, 7, 10, 12];

console.log(myAttempt(test));
