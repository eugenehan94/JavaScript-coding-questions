/*
Three in one: Describe how you could use a singly array to implement
three stacks
*/

console.log("--------Approach 1 (textbook) -------------");

/*
Fixed division
for stack 1, we will use 0 to n/3
for stack 2, we will use n/3 to 2n/3
for stack 3, we will use 2n/3 to n
*/

class MultiStack {
  constructor(stackSize) {
    this._stackCapacity = stackSize;
    this.values = []; // values in the stack which is max size of stackSize * 3
    this.sizes = [0, 0, 0]; // length of 3 and each index contains the number of items in the respective stack
    this.numberOfStacks = 3;
  }

  get stackCapacity() {
    return this._stackCapacity;
  }

  push(stackNumber, value) {
    if (this.isFull(stackNumber)) {
      return console.log(`Stack number ${stackNumber} is full`);
    }
    // Add one to the respective stack count
    this.sizes[stackNumber]++;
    // Add the value to the list
    this.values[this.indexOfTop(stackNumber)] = value;
    return console.log(
      `Item ${value} has been successfully added to stack ${stackNumber}`
    );
  }

  pop(stackNumber) {
    if (this.isEmpty(stackNumber)) {
      return console.log(`Stack number ${stackNumber} is empty`);
    }
    const topIndex = this.indexOfTop(stackNumber);
    const value = this.values[topIndex];
    this.values[topIndex] = 0; // Clear out element
    this.sizes[stackNumber]--; // Reduce num elements in the stack
    return value;
  }

  peek(stackNumber) {
    if (this.isEmpty(stackNumber)) {
      console.log(`Stack number ${stackNumber} is empty`);
    }
    const topIndex = this.indexOfTop(stackNumber);
    return this.values[topIndex];
  }

  isEmpty(stackNumber) {
    return this.sizes[stackNumber] === 0;
  }

  isFull(stackNumber) {
    return this.sizes[stackNumber] === this._stackCapacity;
  }

  indexOfTop(stackNumber) {
    const offset = stackNumber * this._stackCapacity; // Find the starting point in the array
    const size = this.sizes[stackNumber]; // How many elements are in that stack currently?
    return offset + size - 1;
  }
}

let stack = new MultiStack(5);
// console.log(stack.stackCapacity);
// console.log(stack.indexOfTop(0));
// console.log(stack.values);
// stack.push(0, 4); // "Item 4 has been successfully added to stack 0"
// console.log(stack.indexOfTop(0));
// console.log(stack.values);
// stack.push(0, 3); // "Item 3 has been successfully added to stack 0"
// console.log(stack.indexOfTop(0));
// console.log(stack.values);
// stack.push(0, 2); // ...
// console.log(stack.indexOfTop(0));
// console.log(stack.values);
// stack.push(0, 1);
// console.log(stack.indexOfTop(0));
// console.log(stack.values);

// stack.push(1, 8);
// stack.push(1, 7);
// stack.push(1, 6);
// stack.push(1, 5);
// stack.push(2, 12);
// stack.push(2, 11);
// stack.push(2, 10);
// stack.push(2, 9); // "Item 9 has been successfully added to stack 2"

// console.log(stack);
// console.log(stack.peek(0)); // 1
// console.log(stack.peek(1)); // 5
// console.log(stack.peek(2)); // 9
// console.log(stack.push(0, 16));
// console.log(stack.peek(0)); // 16
// console.log(stack.isFull(0)); // true
// console.log(stack.push(0, 55)); // "Stack number 0 is full"
// console.log(stack.pop(0)); // 16
// console.log(stack.isFull(0)); // false
// console.log(stack);
