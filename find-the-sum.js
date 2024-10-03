/*
Create a function that takes two numbers as arguments and returns their sum.

Examples: 	
addition(3, 2) ➞ 5		addition(-3, -6) ➞ -9	addition(7, 3) ➞ 10

Notes: Don't forget to return the result and check for edge cases! 


*/

function addition(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    return "Please put a number input value for a parameter."
}

console.log(addition(3, 2)); // 5
console.log(addition(-3, -6)); // -9
console.log(addition(7, 3)); // 10
console.log(addition(true, false)); // "Please put a number input value for a parameter."
console.log(addition("true", "false")); // "Please put a number input value for a parameter."