/*
Sort Stack: Write a program to sort a stack such that the smallest items 
are on the top. You can use an additional temporary stack, but you may not
copy the elements into any other data structure (such as an array). The stack
supports the following operations: push, pop, peek and isEmpty.
*/

class myAttempt {
  /*
    Examples:
    [1,3,2,5,4] will be this after sort [5,4,3,2,1].
    Traverse stack to find largest value, push value to temporary stack.
    Remove value from largest from the original stack and continue until
    same process until original stack is empty. Then assign the original
    stack to the temporary stack
    */

  constructor() {
    this.stack = [];
    this.temporaryStack = [];
  }

  push(value) {
    this.stack.push(value);
  }
  // the sorting function here
  sort() {
    if (this.stack.length === 0) {
      return console.log("Stack is empty");
    }

    while (this.stack.length !== 0) {
      let largestValue = 0;
      let largestValueIndex;
      //Traverse the stack and find the largest value with corresponding index
      for (let i = 0; i < this.stack.length; i++) {
        if (largestValue < this.stack[i]) {
          largestValue = this.stack[i];
          largestValueIndex = i;
        }
      }
      this.stack.splice(largestValueIndex, 1);
      this.temporaryStack.push(largestValue);
    }
    // Re-assing the original with the temporary stack
    this.stack = [...this.temporaryStack];
  }
}

let test = new myAttempt();
test.push(1);
test.push(3);
test.push(2);
test.push(5);
test.push(4);
console.log("Stack after push(): ", test);
test.sort();
console.log("Stack after sort(): ", test);

console.log("------------Approach 1 (Website) --------------");
/*
Create a temporary stack say tmpStack.
While input stack is NOT empty do this: 
Pop an element from input stack call it temp
while temporary stack is NOT empty and top of temporary stack is 
greater than temp, 
pop from temporary stack and push it to the input stack
push temp in temporary stack
The sorted numbers are in tmpStack
*/

function sortStack(input) {
  let tmpStack = [];
  while (input.length > 0) {
    // Pop out the first element
    let tmp = input.pop();

    // While temporary stack is not empty and top of stack
    // is lesser than temp
    while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] < tmp) {
      // Pop from temporary stack and push it to the
      // input stack
      input.push(tmpStack[tmpStack.length - 1]);
      tmpStack.pop();
    }

    // Push temp in tmporary of stack
    tmpStack.push(tmp);
  }
  return tmpStack;
}

let input = [];
input.push(34);
input.push(3);
input.push(31);
input.push(98);
input.push(92);
input.push(23);

// This is the temporary stack 
let tmpStack = sortStack(input);

while (tmpStack.length > 0)
{
    console.log(tmpStack[tmpStack.length - 1] + " ");
    tmpStack.pop();
}