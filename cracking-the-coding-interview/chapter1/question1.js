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

console.log(
  "--------------------------Approach 4---------------------------------"
);
/*
 Use of Extra Data Structure: This approach assumes ASCII char set(8 bits). 
 The idea is to maintain a boolean array for the characters. 
 The 256 indices represent 256 characters. All the array elements are initially set to 
 false. As we iterate over the string, set true at the index equal to the int value of 
 the character. If at any time, we encounter that the array value is already true, 
 it means the character with that int value is repeated. 
*/
// time complexity: O(n)
const MAX_CHAR = 256;

const uniqueStringFour = (str) => {
  if (str.length > MAX_CHAR) {
    return false;
  }

  let chars = new Array(MAX_CHAR);

  for (let i = 0; i < chars.length; i++) {
    chars[i] = false;
  }

  for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt();
    /* If the value is already true, string
    has duplicate characters, return false */
    if (chars[index] === true) {
      return false;
    }
    chars[index] = true;
  }

  // No duplicates encounted, return true
  return true;
};

console.log(stringOne + " is:", uniqueStringFour(stringOne));
console.log(stringTwo + " is:", uniqueStringFour(stringTwo));

console.log(
  "--------------------------Approach 5---------------------------------"
);
/*
Approach 5 – Without Extra Data Structure: The approach is valid for strings 
having alphabet as a-z. This approach is a little tricky. Instead of maintaining a 
boolean array, we maintain an integer value called checker(32 bits). 
As we iterate over the string, we find the int value of the character with respect 
to ‘a’ with the statement 
int bitAtIndex = str.charAt(i)-‘a’; 
Then the bit at that int value is set to 1 with the statement 
1 << bitAtIndex . 
Now, if this bit is already set in the checker, the bit AND operation 
would make the checker > 0. Return false in this case. 
Else Update checker to make the bit 1 at that index with the statement 
checker = checker | (1 <<bitAtIndex); 
*/
// Time complexity: O(n)
// Auxiliary space: O(1)
const uniqueStringFive = (str) => {
  // Assuming string can have characters a-z this has 32 bits set to 0
  let checker = 0;

  for (let i = 0; i < str.length; i++) {
    let bitAtIndex = str[i].charCodeAt(0) - "a".charCodeAt(0);
    console.log("bitAtIndex: ", bitAtIndex);
    // if that bit is already set
    // in checker, return false
    if ((checker & (1 << bitAtIndex)) > 0) {
      return false;
    }

    // otherwise update and continue by setting
    // that bit in the checker
    checker = checker | (1 << bitAtIndex);
  }

  // no duplicates encounted,
  // return true
  return true;
};
console.log(stringOne + " is:", uniqueStringFive(stringOne));
console.log(stringTwo + " is:", uniqueStringFive(stringTwo));
console.log(stringThree + " is:", uniqueStringFive(stringThree));
