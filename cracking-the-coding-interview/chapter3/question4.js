/*
Queue via Stacks: Implement a MyQueue class which implements a queue
using two stacks.
*/

class myAttempt {
  // Queues are first in first out
  // Stacks are first in last out
  // One stack will hold the intial pushed data.
  // Data from the first stack will be pushed into second stack. This will
  // reverse the stack, simulating the first in first out of a queue
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  push(data) {
    this.stackOne.push(data);
  }

  pop() {
    if (this.stackOne.length === 0) {
      return -1;
    }
    this.stackTwo = [];
    // Create a temporary of stack one because pop will remove from original
    // if we did let stackOneTemp = this.stackOne;
    let stackOneTemp = [...this.stackOne];
    while (stackOneTemp.length !== 0) {
      let popped = stackOneTemp.pop();
      this.stackTwo.push(popped);
    }
    this.stackOne.shift();
    return this.stackTwo.pop();
  }

  peek() {
    if (this.stackTwo.length === 0) {
      return this.stackOne[this.stackOne.length - 1];
    }
    return this.stackTwo[this.stackTwo.length - 1];
  }
}

let test = new myAttempt();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
console.log("After push(es): ", test);
test.pop();
test.pop();
console.log("After pop(s): ", test);
console.log(test.peek());

console.log("---------Approach 1 (Website) ----------");
/*
(By making enQueue operation costly): This method makes sure 
that oldest entered element is always at the top of stack 1, 
so that deQueue operation just pops from stack1. To put the 
element at top of stack1, stack2 is used.

enQueue(q, x): 

While stack1 is not empty, push everything from stack1 to stack2.
Push x to stack1 (assuming size of stacks is unlimited).
Push everything back to stack1.
Here time complexity will be O(n)

deQueue(q): 

If stack1 is empty then error
Pop an item from stack1 and return it
Here time complexity will be O(1)

Complexity Analysis: 

Time Complexity: 
Push operation: O(N). 
In the worst case we have empty whole of stack 1 into stack 2.
Pop operation: O(1). 
Same as pop operation in stack.
Auxiliary Space: O(N). 
Use of stack for storing values.
*/

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    // Move all elements from s1 to s2
    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }

    // Push item into s1
    this.s1.push(x);

    // Push everything back to s1
    while (this.s2.length !== 0) {
      this.s1.push(this.s2.pop());
    }
  }

  deQueue() {
    // If first stack is empty
    if (this.s1.length === 0) {
      return -1;
    }

    // Return top of s1
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

console.log("------------Approach 2 (Website) --------");
/*
In this method, in en-queue operation, the new element is entered 
at the top of stack1. In de-queue operation, if stack2 is empty 
then all the elements are moved to stack2 and finally top of 
stack2 is returned.

This method is definitely better than the one above. 

This method (in deQueue operation) moves the elements
once and moves elements only if stack2 empty. So, the 
amortized complexity of the dequeue operation becomes \Theta (1) 

Complexity Analysis: 

Time Complexity: 
Push operation: O(1). 
Same as pop operation in stack.
Pop operation: O(N) in general and O(1) amortized time complexity.
In the worst case we have to empty the whole of stack 
1 into stack 2 so its O(N). Amortized time is the way to 
express the time complexity when an algorithm has the very 
bad time complexity only once in a while besides the time 
complexity that happens most of time. So its O(1) amortized 
time complexity, since we have to empty whole of stack 1 only 
when stack 2 is empty, rest of the times the pop operation takes O(1) time.
Auxiliary Space: O(N). 
Use of stack for storing values.

*/

class Queue2 {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    // Push item into the first stack
    this.s1.push(x);
  }

  // Dequeue and item from the queue
  deQueue() {
    // If both stacks are empty
    if (this.s1.length === 0 && this.s2.length === 0) {
      return -1;
    }

    // If s2 is empty, move elements from s1
    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1[0]);
        this.s1.shift();
      }
    }

    // Return the top item from s2
    let x = this.s2[0];
    this.s2.shift();
    return x;
  }
}

let q2 = new Queue2();
q2.enQueue(1);
q2.enQueue(2);
q2.enQueue(3);

console.log(q2.deQueue());
console.log(q2.deQueue());
console.log(q2.deQueue());

console.log("-----------Approach 3 (Website) --------------");
/*
Queue can also be implemented using one user stack and one Function Call Stack.
Below is modified Method 2 where recursion (or Function Call Stack) is used 
to implement queue using only one user defined stack. 

enQueue(x)
  1) Push x to stack1.

deQueue:
  1) If stack1 is empty then error.
  2) If stack1 has only one element then return it.
  3) Recursively pop everything from the stack1, store the popped item 
    in a variable res,  push the res back to stack1 and return res
The step 3 makes sure that the last popped item is always returned 
and since the recursion stops when there is only one item in 
stack1 (step 2), we get the last element of stack1 in deQueue() 
and all other items are pushed back in step 

Complexity Analysis: 

Time Complexity: 
Push operation : O(1). 
Same as pop operation in stack.
Pop operation : O(N). 
The difference from above method is that in this 
method element is returned and all elements are restored 
back in a single call.
Auxiliary Space: O(N). 
Use of stack for storing values.
*/

class Queue3 {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  // Enqueue an item to the queue
  enQueue(x) {
    // Push item into the first stack
    this.s1.push(x);
  }

  // Dequeue an item from the queue
  deQueue() {
    // If both stacks are empty
    if (this.s1.length === 0 && this.s2.length === 0) {
      return -1;
    }

    // If s2 is empty, move elements from s1
    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1[0]);
        this.s1.shift();
      }
    }

    // Return the top item from s2
    let x = this.s2[0];
    this.s2.shift();
    return x;
  }
}

let q3 = new Queue();
q3.enQueue(1);
q3.enQueue(2);
q3.enQueue(3);
 
console.log(q3.deQueue());
console.log(q3.deQueue());
console.log(q3.deQueue());