/*
Stack Min: How would you design a stack which, in addition to push and pop,
has a function min which returns the minimum element? Push, pop and min 
should all operate in O(1) time.

NOTE: Stack does not store actual values inserted, but the minimum value
will be stored by the minEle variable

*/

console.log("-------Approach 1 (website)---------");
// https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/

class MyStack {
  constructor() {
    this.s = [];
    this.minEle;
  }

  // Prints minimum element of MyStack
  getMin() {
    if (this.s.length === 0) {
      console.log("Stack is empty");
    }
    // Variable minEle stores the minimum element
    // in the stack
    else {
      console.log("Minimum element in the stack is: ", this.minEle);
    }
  }

  // Prints top element of MyStack
  peek() {
    if (this.s.length === 0) {
      console.log("Stack is empty");
      return;
    }
    let t = this.s[0]; // Top element.

    console.log("Top Most Element is: ");

    // If t < minEle means minEle stores value of t.
    t < this.minEle ? console.log(this.minEle) : console.log(t);
  }

  // Remove the top element from MyStack
  pop() {
    if (this.s.length === 0) {
      console.log("Stack is empty");
    }

    console.log("Top Most Element Removed: ");
    let t = this.s[0];
    this.s.shift();

    // Minimum will change as the minimum element of the stack is
    // being removed.
    if (t < this.minEle) {
      console.log(this.minEle);
      this.minEle = 2 * this.minEle - t;
    } else {
      console.log(t);
    }
  }

  push(x) {
    // Insert new number into the stack
    if (this.s.length === 0) {
      this.minEle = x;
      this.s.unshift(x);
      console.log("Number Inserted: ", x);
      return;
    }
    // If new number is less than minEle
    else if (x < this.minEle) {
      this.s.unshift(2 * x - this.minEle);
      this.minEle = x;
    } else {
      this.s.unshift(x);
    }
    console.log("Number Inserted: ", x);
  }
}

// Driver Code
let s = new MyStack();

// Function calls
s.push(3);
s.push(5);
s.getMin();
s.push(2);
s.push(1);
s.getMin();
s.pop();
s.getMin();
s.pop();
s.peek();

console.log("----------Approach 2 (website) -----------");
/*
To solve the problem follow the below idea:
Create a class node that has two variables Val and min. Val will store
the actual value that we are going to insert in the stack, whereas min
will store the min value so far seen up to that node
*/

function mini(a, b) {
  return a > b ? b : a;
}

class MinStack {
  constructor() {
    this.s = new Array();
  }

  pushE(element) {
    /*
    New max will be given no. if stack is empty else we 
    compare given no. to max at current top of stack
    */

    let new_min = 0;
    if (this.s.length === 0) {
      new_min = element;
    } else {
      new_min = mini(element, this.s[this.s.length - 1].second);
    }

    // We push the pair of given_element, new_min in s
    this.s.push({
      first: element,
      second: new_min,
    });
  }

  popE() {
    let popped;
    if (this.s.length > 0) {
      // popped has popped number
      popped = this.s[this.s.length - 1].first;
      this.s.pop();
    } else {
      // print a message or throw exception etc
    }
    return popped;
  }

  minimum() {
    let min_elem = this.s[this.s.length - 1].second;
    return min_elem;
  }
}

// Driver code
let test2 = new MinStack();

// Function calls
test2.pushE(-1);
test2.pushE(10);
test2.pushE(-4);
test2.pushE(0);
console.log(test2.minimum());
console.log(test2.popE());
console.log(test2.popE());
console.log(test2.minimum());
