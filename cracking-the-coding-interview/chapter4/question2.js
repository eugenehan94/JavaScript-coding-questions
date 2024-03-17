/*
Minimal Tree: Given a sorted (increasing order) array with unique
integer elements, write an algorithm to create a binary search tree
with minimal height
*/

console.log("--------------Solution 1 --------------------");
// Define a TreeNode class to represent a node in the Binary
// Search Tree (BST)
// Time complexity of this algorithm is O(n)
class TreeNode {
  constructor(value) {
    // The value of the node
    this.value = value;
    // Pointer to the left child node
    this.left = null;
    // Pointer to the right child node
    this.right = null;
  }
}

// Function to convert a sorted array to a Binary Search Tree (BST)
function sortedArrayToBST(arr) {
  // If the array is empty return null
  if (!arr.length) {
    return null;
  }
  // Call the helper function to construct the BST and return
  // the root of the BST
  return constructBST(arr, 0, arr.length - 1);
}

// Helper function to construct the BST from the sorted array
function constructBST(arr, start, end) {
  // Base case: if start index is greater than end index, return null
  if (start > end) {
    return null;
  }
  // Calculate the middle index of the array
  let mid = Math.floor((start + end) / 2);
  // Create a new TreeNode with the middle element as the value
  let node = new TreeNode(arr[mid]);

  // Recursively construct the left subtree using the left half of the array
  node.left = constructBST(arr, start, mid - 1);
  // Recursively construct the right subtree using the right half of the array
  node.right = constructBST(arr, mid + 1, end);

  // Return the constructed node
  return node;
}

// Example usage:
let sortedArray = [1, 2, 3, 4, 5, 6, 7];
// Convert the sorted array to a BST and get the root of the BST
let root = sortedArrayToBST(sortedArray);

// Helper function to print the tree using in-order traversal
function inOrderTraversal(root) {
  if (root !== null) {
    // Travsere the left subtree
    inOrderTraversal(root.left);
    // Pring the value of the current node
    console.log(root.value);
    // Traverse the right subtree
    inOrderTraversal(root.right);
  }
}

// Perform in-order traversal on the constructed BST
inOrderTraversal(root);
