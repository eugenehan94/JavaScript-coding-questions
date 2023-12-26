/*
Check permutation: Given two strings, write a method to decide if one is a
permutation of the other.
*/

const myAttempt = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let stringOne = str1.split("").sort();
  let stringTwo = str2.split("").sort();

  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      return false;
    }
  }
  return true;
};

let string1 = "dog";
let string2 = "god";
let string3 = "hello";
let string4 = "dog ";
let resultOne = myAttempt(string1, string2);
let resultTwo = myAttempt(string1, string3);
let resultThree = myAttempt(string1, string4);
console.log(string1, "and", string2, "are permutations:", resultOne);
console.log(string1, "and", string3, "are permutations:", resultTwo);
console.log(string1, "and", string4, "are permutations:", resultThree);

console.log(
  "--------------------------Approach 1---------------------------------"
);

/* 
Time Complexity: Time complexity of this method depends upon the sorting technique used. 
In the above implementation, quickSort is used which may be O(n^2) in worst case. 
If we use a O(nLogn) sorting algorithm like merge sort, 
then the complexity becomes O(nLogn)
Auxiliary space: O(1).
*/

function arePermutationOne(str1, str2) {
  //Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not same,
  // then they cannot be Permutation
  if (n1 != n2) {
    return false;
  }

  let ch1 = str1.split("");
  let ch2 = str2.split("");

  // Sort both strings
  ch1.sort();
  ch2.sort();

  // Compare sorted strings
  for (let i = 0; i < n1; i++) {
    if (ch1[i] != ch2[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  string1,
  "and",
  string2,
  "are permutations:",
  arePermutationOne(string1, string2)
);
console.log(
  string1,
  "and",
  string3,
  "are permutations:",
  arePermutationOne(string1, string3)
);
console.log(
  string1,
  "and",
  string4,
  "are permutations:",
  arePermutationOne(string1, string4)
);

console.log(
  "--------------------------Approach 2---------------------------------"
);
/*
Method 2 (Count characters) 
This method assumes that the set of possible characters in both strings is small. 
In the following implementation, it is assumed that the characters are stored 
using 8 bit and there can be 256 possible characters. 
1) Create count arrays of size 256 for both strings. 
Initialize all values in count arrays as 0. 
2) Iterate through every character of both strings and 
increment the count of character in the corresponding count arrays. 
3) Compare count arrays. If both count 
arrays are same, then return true.
*/
// Time Complexity: O(n)
// Auxiliary space: O(n).
const NO_OF_CHARS = 256;

function arePermutationTwo(str1, str2) {
  // Create 2 count arrays and initialize
  // all values to 0
  let count1 = new Array(NO_OF_CHARS);
  let count2 = new Array(NO_OF_CHARS);
  count1.fill(0);
  count2.fill(0);
  let i;

  for (i = 0; i < str1.length && i < str2.length; i++) {
    count1[str1[i]]++;
    count2[str2[i]]++;
  }

  // If both string are of different length.
  // Removing this condition will make the program
  // fail for strings like "aaca" and "aca"
  if (str1.length != str2.length) {
    return false;
  }
  // Compare count arrays
  for (i = 0; i < NO_OF_CHARS; i++) {
    if (count1[i] != count2[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  string1,
  "and",
  string2,
  "are permutations:",
  arePermutationTwo(string1, string2)
);
console.log(
  string1,
  "and",
  string3,
  "are permutations:",
  arePermutationTwo(string1, string3)
);
console.log(
  string1,
  "and",
  string4,
  "are permutations:",
  arePermutationTwo(string1, string4)
);
