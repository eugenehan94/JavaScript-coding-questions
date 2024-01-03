/*
Sum List: You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such that
the 1's digit is at the head of the list. Write a function that adds the two
numbers and returns the sum as a linked list.

EXAMPLE
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above program
EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295
Output: 9 -> 1 -> 2. That is, 912.

*/

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const myAttempt = (first, second) => {
  // Traverse each linked list, concatenate the digits (template literals),
  // numbers will be in string - convert to number and add.
  // With answer -  modulus 10 to get digit and place in new linked list,
  // divide answer by 10 to move to next digit.

  let firstInOrder = "";
  let secondInOrder = "";
  let result;
  let resultPointer;
  while (first !== null) {
    firstInOrder = `${first.data}` + `${firstInOrder}`;
    first = first.next;
  }

  while (second !== null) {
    secondInOrder = `${second.data}` + `${secondInOrder}`;
    second = second.next;
  }

  let sumOfFirstAndSecond = parseInt(firstInOrder) + parseInt(secondInOrder);

  while (sumOfFirstAndSecond !== 0) {
    let digit = sumOfFirstAndSecond % 10;

    if (result === undefined) {
      result = new Node(digit);
      resultPointer = result;
    } else {
      resultPointer.next = new Node(digit);
      resultPointer = result.next;
    }

    sumOfFirstAndSecond = Math.floor(sumOfFirstAndSecond / 10);
  }

  return result;
};

let testOne = new Node(7);
testOne.next = new Node(1);
testOne.next.next = new Node(6);
let testTwo = new Node(5);
testTwo.next = new Node(9);
testTwo.next.next = new Node(2);

const final = myAttempt(testOne, testTwo);
console.log("Final: ", final)

