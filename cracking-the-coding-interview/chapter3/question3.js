/*
Stack of plates: Imagine a (literal) stack of plates. If the stack gets too
high, it might topple. Therefore, in real life, we would likely start a
new stack when the previous stack exceeds some threshold. Implement a 
data structure SetOfStacks that mimics this. SetOfStacks should be 
composed of several stacks and should create a new stack once the previous
one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
behave identically to a single stack (that is, pop() should return the
same values as it would if there were just a single stack).

FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a
specific sub-track.
*/

console.log("---------Approach 1 (website) ---------");

class StackOfPlates {
  constructor(capacity) {
    if (!capacity || capacity < 0) {
      return console.log("Specify plate capacity. Cannot be created");
    }

    this.capacity = capacity;
    this.storage = [[]]; // Each inner array represents a set of plates
  }

  getLastStack() {
    return this.storage[this.storage.length - 1];
  }

  push(element) {
    if (this.getLastStack().length >= this.capacity) {
      this.storage.push([]); // Create a new stack inside
    }
    this.getLastStack().push(element);
  }
  pop() {
    let lastStack = this.getLastStack();
    let element = this.getLastStack().pop();
    console.log(this.getLastStack().length);
    if (this.getLastStack().length === 0) {
      this.storage.pop();
    }
    return element;
  }

  popAt(position) {
    let count = 0;

    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        count++;
        if (count === position) {
          let next;
          let lastElement = count;
          if (this.storage[i][j + 1] && position < lastElement) {
            next = this.storage[i][j + 1];
          } else if (!this.storage[i][j + 1] && position !== lastElement) {
            next = this.storage[i + 1][0];
          }
          this.storage[i].splice(j, 1, next);
        }
      }
    }
  }

  peek() {
    return this.getLastStack()[this.getLastStack().length - 1];
  }

  // Counts the total individual elements present in the stack
  count() {
    let m = this.storage.length - 1; // Number of rows -1
    let n = 0;
    let remainder = 0;
    if (m > 1) {
      n = this.storage[this.storage.length - 2].length;
    }
    remainder = this.getLastStack().length;
    return m * n + remainder;
  }
}

let test1 = new StackOfPlates(); // Error case
let test2 = new StackOfPlates(3);
test2.push(1);
test2.push(2);
test2.push(3);
test2.push(4);
console.log(test2);
test2.pop();
console.log("Stack after pop: ", test2);
console.log("peek:", test2.peek());
console.log("count: ", test2.count());
test2.push(4);
test2.push(5);
test2.push(6);
test2.push(7);
console.log(test2);
test2.popAt(4)
console.log("Stack after popAt(4)", test2)
