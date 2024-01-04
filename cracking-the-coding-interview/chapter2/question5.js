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
  // NOTE: This solutions also handles if two linked list have different digit
  // counts.

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
      resultPointer = resultPointer.next;
    }

    sumOfFirstAndSecond = Math.floor(sumOfFirstAndSecond / 10);
  }

  return result;
};

let testOne = new Node(7);
testOne.next = new Node(1);
testOne.next.next = new Node(6);
// testOne.next.next.next = new Node(6);
let testTwo = new Node(5);
testTwo.next = new Node(9);
testTwo.next.next = new Node(2);

const final = myAttempt(testOne, testTwo);
console.log("Final: ", final);

console.log("--------Approach 1 (Textbook) -----------");

/*
Think how exactly addition works.
Add two single value numbers. The first digit will be store in linked list,
while the second digit 1 (since the highest value of two single digit addition
  is 9 + 9 = 18) gets carried over.

  NOTE: This implementation doesn't handle if two linked list are different
  in size.
*/

function addLists(list1, list2, carry) {
  if (list1 === null && list2 === null && carry === 0) {
    return null;
  }

  let result;
  let value = carry;

  if (list1 !== null) {
    value += list1.data;
  }
  if (list2 !== null) {
    value += list2.data;
  }

  result = new Node(value % 10); /* Second digit of number*/

  /* Recurse */
  if (list1 !== null || list2 !== null) {
    let more = addLists(
      list1 === null ? null : list1.next,
      list2 === null ? null : list2.next,
      value >= 10 ? 1 : 0
    );
    result.next = more;
  }
  return result;
}
console.log(addLists(testOne, testTwo, 0));

console.log("--------Approach 3 (textbook) --------");

/*
  Solution to handle if two linked list were of different sizes.
  This is accomplished by comparing the sizes and adding zeros to shortest
  linked list
  Same approach as above; recursive
*/

class PartialSum {
  constructor() {
    this.sum = null;
    this.carry = 0;
  }
}

function addLists2(list1, list2) {
  let len1 = length(list1);
  let len2 = length(list2);

  // Pad the shorter list with zeros
  if (len1 < len2) {
    list1 = padList(list1, len2 - len1);
  } else {
    list2 = padList(list2, len1 - len2);
  }

  // Add lists
  sum = addListsHelper(list1, list2);
  // If there was a carry value left over, insert this at the front of the list.
  // Otherwise, just return the linkedlist.
  if (sum.carry === 0) {
    return sum.sum;
  } else {
    let result = insertBefore(sum.sum, sum.carry);
    return result;
  }
}

function addListsHelper(list1, list2) {
  if (list1 === null && list2 === null) {
    let sum = new PartialSum();
    return sum;
  }
  // Add smaller digits recursively
  let sum = addListsHelper(list1.next, list2.next);

  // Add carry to current data
  let val = Math.floor(sum.carry + list1.data + list2.data);

  // Insert sum of current digits
  let full_result = insertBefore(sum.sum, val % 10);
  // Retrun sum so far, and the carry value
  sum.sum = full_result;
  sum.carry = Math.floor(val / 10);
  return sum;
}

function length(list) {
  let count = 0;

  while (list !== null) {
    count++;
    list = list.next;
  }
  return count;
}

// Pad the list with zeros
function padList(list, padding) {
  let head = list;
  for (let i = 0; i < padding; i++) {
    head = insertBefore(head, 0);
  }
  return head;
}

// Helper function to insert node in the front of a linked list
function insertBefore(list, data) {
  let node = new Node(data);
  if (list !== null) {
    node.next = list;
  }
  return node;
}

let testThree = new Node(7);
testThree.next = new Node(1);
testThree.next.next = new Node(6);
testThree.next.next.next = new Node(6);

console.log(addLists2(testThree, testTwo));
