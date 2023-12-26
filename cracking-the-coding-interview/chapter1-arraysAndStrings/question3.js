/*
URLify: Write a method to replace all spaces in a string with "%20". You may assume
that the string has sufficient space at the end to hold the additional characters,
and that you are given the 'true' length of the string. (Note: if implementing in Java,
please use a character array so that you can perform this operation in place).

EXAMPLE
Input:  "Mr John Smith     ", 13
Output: "Mr%20John%20Smith"
*/

const myAttempt = (str) => {
  let string = str.trim();

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      string = string.replace(" ", "%20");
    }
  }
  return string;
};

let string = "Mr John Smith   ";
console.log(myAttempt(string));

console.log(
  "--------------------------Approach 1---------------------------------"
);
/* 
A better solution to do in-place assuming that we have extra space in the input string. 
We first count the number of spaces in the input string. 
Using this count, we can find the length of the modified (or result) string. 
After computing the new length we fill the string in-place from the end. 
*/
/*
Time Complexity: O(n), where n is the true length of the string. 
Auxiliary Space: O(1), because the above program is an inplace algorithm.
*/
// Maximum length of string after modifications.
const MAX = 1000;

// Replaces spaces with %20 in-place and returns
// new length of modified string. It returns -1
// if modified string cannot be stored in str[]
function replaceSpaces(str) {
  // count spaces and find current length
  let space_count = 0;
  let i;

  for (i = 0; str[i]; i++) {
    if (str[i] == " ") {
      space_count++;
    }
  }

  // Remove trailing spaces
  while (str[i - 1] == " ") {
    space_count--;
    i--;
  }

  // Find new length.
  let new_length = i + space_count * 2 + 1;

  // New length must be smaller than length
  // of string provided.
  if (new_length > MAX) return -1;

  // Start filling character from end
  let index = new_length - 1;

  // Fill string termination.
  str[index--] = "\0";

  let new_str = "";
  // Fill rest of the string from end
  for (let j = i - 1; j >= 0; j--) {
    // inserts %20 in place of space
    if (str[j] == " ") {
      new_str = "%20" + new_str;
    } else {
      new_str = str[j] + new_str;
    }
  }
  console.log(new_str);

  return new_length;
}

// Driver code
let str = "Mr John Smith   ";

// Prints the replaced string
let new_length = replaceSpaces(str);

console.log(
  "--------------------------Approach 2---------------------------------"
);
/*
Trim the string and call replaceAll() method, to replace all space Unicode to %20. 
*/
/*
Time complexity: O(N) where N is the length of the string.
Auxiliary space: O(1).
*/
// Instantiate the string
var testString = "Mr John Smith ";
testString = testString.trim();
// we can use regular expression for checking empty space /;
testString = testString.replace(/ /g, "%20");

// Display the result
console.log(testString);
