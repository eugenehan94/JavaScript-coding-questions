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
    let lastStack = this.getLastStack;
    let element = lastStack().pop();
    if (lastStack().length === 0 && lastStack().length >= 1) {
      this.storage.pop();
    }
    return element;
  }

  popAt(position) {
    let count = 0;

    for (let i = 0; i < this.storage.length; i++) {
      count++;

      for (let j = 0; j < this.storage[i].length; j++) {
        if (count === position) {
          let next;
          let lastElement = count();
          if (this.storage[i][j+1] && position < lastElement){
            next = this.storage[i][j+1];
          }else if(){
            
          }
        }
      }
    }
  }
}

let test1 = new StackOfPlates();
let test2 = new StackOfPlates(5);
console.log(test2);
