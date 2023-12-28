/*
One Away: There are three types of edits that can be performed on strings: insert
a character, remove a character, or replace a character. Given two strings, write a
function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

const myAttempt = (str1, str2) => {
  // compare each individual characters,
  // compare string lengths - if equal, check for differences in character, more than
  // one returns falses. If string length no equal, can only differ by 1 character
  // (insert one or remove one)
  // Could refactor the smilar lines of code to separate functions
  if (str1.length === str2.length) {
    let differenceCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        differenceCount++;
      }
      if (differenceCount > 1) {
        return false;
      }
    }
    return true;
  } else if (str1.length - 1 === str2.length) {
    let index1 = 0;
    let index2 = 0;

    while (index2 < str2.length && index1 < str1.length) {
      if (str2.charAt(index2) !== str1.charAt(index1)) {
        if (index1 != index2) {
          return false;
        }
        index1++;
      } else {
        index2++;
        index1++;
      }
    }
    return true;
  } else if (str1.length + 1 === str2.length) {
    let index1 = 0;
    let index2 = 0;

    while (index1 < str1.length && index2 < str2.length) {
      if (str1.charAt(index1) !== str2.charAt(index2)) {
        if (index1 != index2) {
          return false;
        }
        index2++;
      } else {
        index2++;
        index1++;
      }
    }
    return true;
  }
  return false;
};

console.log(myAttempt("pale", "ple"));
console.log(myAttempt("pale", "pale"));
console.log(myAttempt("pales", "pale"));
console.log(myAttempt("pale", "bale"));
console.log(myAttempt("pale", "bake"));

console.log(
  "---------------------------------Approach 1 ------------------------"
);
function isEditDistanceOne(str1, str2) {
  // Find lengths of given strings
  let str1Length = str1.length;
  let str2Length = str2.length;

  // If difference between lengths is
  // more than 1, then strings can't
  // be at one distance
  if (Math.abs(str1Length - str2Length) > 1) return false;

  // Count of edits
  let count = 0;
  let i = 0;
  let j = 0;

  while (i < str1Length && j < str2Length) {
    // If current characters
    // don't match
    if (str1[i] != str2[j]) {
      if (count == 1) {
        return false;
      }

      // If length of one string is
      // more, then only possible edit
      // is to remove a character
      if (str1Length > str2Length) {
        i++;
      } else if (str1Length < str2Length) {
        j++;
      }
      // If lengths of both
      // strings is same
      else {
        i++;
        j++;
      }

      // Increment count of edits
      count++;
    }

    // If current characters match
    else {
      i++;
      j++;
    }
  }

  // If last character is extra
  // in any string
  if (i < str1Length || j < str2Length) {
    count++;
  }

  // count = 0 is no difference in two string and count = 1 is only one edit is present.
  // any count 2 and more indicates more than one edit present, thus should return false.
  return count < 2;
}

console.log(isEditDistanceOne("pale", "ple"));
console.log(isEditDistanceOne("pale", "pale"));
console.log(isEditDistanceOne("pales", "pale"));
console.log(isEditDistanceOne("pale", "bale"));
console.log(isEditDistanceOne("pale", "bake"));
