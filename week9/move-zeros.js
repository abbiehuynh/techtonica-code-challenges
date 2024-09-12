/*

09/12/24 - Thursday

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:					
Input: nums = [0,1,0,3,12]		
Output: [1,3,12,0,0]			

Example 2:
Input: nums = [0]
Output: [0]

Challenge: Can you write your answer without making a copy of the array. Could you minimize the total number of operations done?

*/

// pseudocode

// // create a function takes an array as a parameter 
// function moveZero(arr) {
// // create a variable to hold the zero = 0
// let zero = 0;

// // create a varaible to hold the newArray 
// let newArr = [];
// // create a loop to iterate through the array 
// for (let i = 0; i < arr.length; i++) {
// // if i = zero 
//     if (arr[i] === zero) {

//     }
//         // shift 0
//         // then unshift zero into array 
// }
//     // return array 
// }


// pseudocode
// intialize a pointer start at 0 to track non-zero elements => nonZeroIndex
// iterate through array with a loop 
// swap logic [a, b] = [b, a]
// increment non zero index 
// continue looping 
// return 

function moveZeros(nums){
    // initialize a pointer start at 0
    let nonZeroIndex = 0;
    // Iterate through array
    for (let i = 0; i < nums.length; i++) {
        // current element is not zero, swap with nonZeroIndex position
        if(nums[i] !== 0){
            // destructuring an array while swapping variables 
            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
            nonZeroIndex++;
        }
    }
    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));