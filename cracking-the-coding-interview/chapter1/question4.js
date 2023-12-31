/*
Palindrome Permutation: Given a string, write a function to check if it is a 
permutation of a palindrome. A palindrome is a word or phrase that is the same
forwards and backwards. A permutation is a rearrangement of letters. The 
palindrome does not need to be limited to just dictionary words.

EXAMPLE
input: Tact Coa
output: True (permuations: "taco cat", "atco cta", etc)
*/

const isPalindrome = (str) => {
  const charCount = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    // Run if statement for ASCII outside lowercase letters a to z
    if (
      (str[i].charCodeAt() & 255) < ("a".charCodeAt() & 255) ||
      (str[i].charCodeAt() & 255) > ("z".charCodeAt() & 255)
    ) {
      continue;
    }
    // store in charCount the letter counts: charCount = { t: 2, e: 1, s:1}
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
  }

  // Generates an array using the values of the Object (not the keys)
  // Example -> counts = [2, 1, 1]
  const counts = Object.values(charCount);
  let oddCounts = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 != 0) {
      oddCounts++;
    }

    if (oddCounts > 1) {
      return false;
    }
  }
  return true;
};
//O(2N) -> O(N) Using 1 loop
const isPalindromeShort = (str) => {
  const charCount = {};
  let oddCounts = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i].charCodeAt() & 255) < ("a".charCodeAt() & 255) ||
      (str[i].charCodeAt() & 255) > ("z".charCodeAt() & 255)
    )
      continue;

    charCount[str[i]] = (charCount[str[i]] || 0) + 1;

    if (charCount[str[i]] % 2 == 1) {
      oddCounts++;
    } else {
      oddCounts--;
    }
  }
  return oddCounts <= 1;
};

console.log(isPalindrome("test"));
console.log(isPalindrome("tenet"));
console.log(isPalindrome("taco caT"));
console.log("------other function--------");
console.log(isPalindromeShort("test"));
console.log(isPalindromeShort("tenet"));
console.log(isPalindromeShort("taco caT"));
