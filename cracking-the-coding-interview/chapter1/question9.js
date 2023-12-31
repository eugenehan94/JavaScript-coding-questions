/*
String Rotation: Assume you have a method isSubstring which checks if one word is a
substring of another. Given two strings, s1 and s2, write code to check if s2 is a
rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation
of "erbottlewat")
*/

const myAttempt = (s1, s2) => {
    // If string lengths not the same - then not rotation
    // If strings are the same - then not rotation
}

console.log("-------Approach 1---------")
/*

Let say 
S1 = xy = waterbottle
x = wat
y = erbottle
thus, S2 = yx = erbottlewat

xyxy = S1S1 = waterbottlewaterbottle => wat|erbottlewat|erbottle
(S1S1 contains the "erbottlewat" which is the rotated version, or S2)

*/

const isSubstring = (concatStr, string2) => {
     return concatStr.includes(string2)
}

const isRotation = (string1, string2) => {
    if (string1.length === string2.length && string1.length > 0){
        let concatStr = string1 + string1;
        return isSubstring(concatStr, string2);
    }
    return false;
}

console.log(isRotation('waterbottle', 'erbottlewat'))