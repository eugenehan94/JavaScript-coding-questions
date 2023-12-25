/*
Is Unique: Implement an algorithm to determine if a string has all
unique characters. What if you cannot use additional data structures?
*/

// My first attempt
const uniqueString = (string) => {
  let str = string;
  while (str.length > 0) {
    let targetChar = str.charAt(0);
    for (let i = 1; i < str.length; i++) {
      if (targetChar === str[i]) {
        return "not unique";
      }
    }
    str = str.slice(1);
  }
  return "unique";
};

// Test Values Here
const stringOne = "test";
const stringTwo = "coding";
const stringThree = "kitchen";

const resultOne = uniqueString(stringOne);
const resultTwo = uniqueString(stringTwo);
const resultThree = uniqueString(stringThree);

console.log(stringOne + " is:", resultOne);
console.log(stringTwo + " is:", resultTwo);
console.log(stringThree + " is:", resultThree);

// Brute Force Answer
// Time complexity O(n^2)
const uniqueStringBruteForce = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      // check if duplicate is met
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  // If no duplicates encounted
  return true;
};
console.log(
  "--------------------------Approach 3---------------------------------"
);
// Approach 3 - sorting: Using sorting based on ASCII values of characters
// Time complexity: O(nlogn)
// Auxiliary space: O(1)
function uniqueStringThree(str) {
  let chArray = str.split("");
  //using sorting
  chArray.sort();
  for (let i = 0; i < chArray.length; i++) {
    // if the adjacent elements are not
    // equal, move to next element
    if (chArray[i] != chArray[i + 1]) continue;
    // if at any time, 2 adjacent elements
    // become equal, return false
    else return false;
  }
  return true;
}

console.log(stringOne + " is:", uniqueStringThree(stringOne));
console.log(stringTwo + " is:", uniqueStringThree(stringTwo));
