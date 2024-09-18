/*
Implement a function which will convert the given boolean value into its string representation.

Example:				Example:
Input: boolean false		Input: boolean true
Output: "false"			Output: “true”

*/

// function 1
// function booleanToString(boolean) {
//     return boolean.toString();
// }

// function 2
// function booleanToString(boolean) {
//     return boolean.valueOf();
// }

// function 3
 function booleanToString(boolean) {
    let bool = true;
    let result = bool ? "true" : "false";
    return result;
 }


console.log(booleanToString(true));
console.log(booleanToString(false));