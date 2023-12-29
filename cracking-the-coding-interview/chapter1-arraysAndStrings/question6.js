/*
String Compression: Implement a method to perform basic string compression using the 
counts of repeated characters. For example, the string aabcccccaaa would become
a2b1c5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string. You can assume the string has 
only uppercase and lowercase letters (a - z).
*/

const myAttempt = (str) => {
  // Iterate string, target character (pointer) and compare it to next neighbour
  // If same character, increment a count variable that starts a one
  // If not same character, add the count variable amount to neighbour position,
  // and restart count to one.
  // Move pointer to next position - for loop will handle
  let count = 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let target = str[i];
    if (target === str[i + 1]) {
      count += 1;
    } else {
      result = result + str.slice(i, i + 1) + count;
      count = 1;
    }
  }
  return result.length < str.length ? result : str;
};

console.log(myAttempt("aabcccccaaa"));
console.log(myAttempt("hello"));
/* Other solutions from the web */

console.log("-----------------Approach 1 ------------------------");

var compressString = function (S) {
  const n = S.length;
  const t = [];
  for (let i = 0; i < n; ) {
    let j = i + 1;
    while (j < n && S.charAt(j) === S.charAt(i)) {
      ++j;
    }
    t.push(S.charAt(i), j - i);
    i = j;
  }
  return t.length < n ? t.join("") : S;
};

console.log(compressString("aabcccccaaa"));
console.log(compressString("hello"));
