// Node class -> singly
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// Linkedlist class
class LinkedList {
  constructor() {
    // head is for the first node of the List
    this.head = null;
    // size is for the number of Node(s) in a list
    this.size = 0;
  }

  // Adds an element at the end of the list
  add(element) {
    let node = new Node(element);
    let current;

    // if list is empty, add element and make it the head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      // iterate to end of list
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert element at position index of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index.");
    } else {
      // create the new node
      let node = new Node(element);
      let current;
      let previous;

      current = this.head;

      // Add the element to the first index
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let i = 0;

        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        // Adding an element
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  }

  // Remove an element from specified location
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    } else {
      let current;
      let previous;
      let i = 0;

      current = this.head;
      previous = current;

      // Delete first element
      if (index === 0) {
        this.head = current.next;
      } else {
        // Iterate over the list to the position to remove an element
        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }
        // Remove the element
        previous.next = current.next;
      }
      this.size++;

      // Return the removed element
      return current.element;
    }
  }

  // Removes a given element from the list
  removeElement(element) {
    let current = this.head;
    let previous = null;

    // Iterate over the list
    while (current !== null) {
      // Comparing element with current element, if found then remove it and return true
      if (current.element === element) {
        if (previous !== null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }

  // Find the index of element
  indexOf(element) {
    let count = 0;
    let current = this.head;

    // Iterate over the list
    while (current !== null) {
      // Compare each element of the list with given element
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  size_of_list() {
    console.log(this.size);
  }

  printList() {
    let current = this.head;
    let string = "";
    while (current) {
      string += current.element + " ";
      current = current.next;
    }
    console.log(string);
  }
}

let test = new LinkedList();
console.log(test.isEmpty());
test.add(10);
test.printList();
test.size_of_list();
test.add(20);
test.add(30);
test.add(40);
test.printList();
console.log("Index of 40: " + test.indexOf(40));
test.insertAt(60, 2)
test.printList();