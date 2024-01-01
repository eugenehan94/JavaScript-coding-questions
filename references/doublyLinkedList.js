// Doubly linked list node
class Node {
  // Constructor to create a new node next and prev
  // is by default initialized as null
  constructor(val) {
    // To store the value
    this.data = val;
    // To link the next Node
    this.next = null;
    // To link the previous Node
    this.prev = null;
  }
}

// Doubly Linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // To check if the list is empty
  isEmpty() {
    if (this.head === null) return true;
    return false;
  }

  // Method to add item at the last of doubly linked list
  addItem(val) {
    // Create a temporary variable
    let temp = new Node(val);

    // If the list is empty link assign new node to both head and tail
    if (this.head === null) {
      this.head = temp;
      this.tail = temp;
    } else {
      // else add item to tail and shift tail
      temp.prev = this.tail;
      this.tail.next = temp;
      this.tail = this.tail.next;
    }
  }

  // To traverse and display the list
  display() {
    // Check if the list is empty
    if (!this.isEmpty()) {
      // Traverse the list using new current pointer
      let current = this.head;
      while (current !== null) {
        // Display element
        console.log(current.data);
        // Shift the current pointer
        current = current.next;
      }
    }
  }
}


let test = new DoublyLinkedList();
test.addItem(25);
test.addItem(27);

test.display();