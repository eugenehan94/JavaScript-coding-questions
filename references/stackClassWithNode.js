// We create a class for each node withn the stack
/*
The big O of stack methods is the following:

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/
class Node {
  // Each node has two properties, it's value and a pointer
  // that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We create a class for the stack
class Stack {
  // The stack has three properties, the first node,
  // the last node and the stack size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // The push method receives a value and adds it to the "top"
  // of the stack
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // The pop method eliminates the element at the 'top' of
  // the stack and returns its value
  pop() {
    if (!this.first) {
      return null;
    }
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let test = new Stack();
test.push(5);
test.push(10);
console.log("Stack after push:", test);
test.pop();
console.log("Stack after pop: ", test)
