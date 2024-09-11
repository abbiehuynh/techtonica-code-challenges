/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:				       Example 2:					Example 3:
Input: nums = [2,2,1]		Input: nums = [4,1,2,1,2]		Input: nums = [1]
Output: 1				        Output: 4					          Output: 1

Notes: Each element in the array appears twice except for one element which appears only once.

Challenge: Can you optimize your implementation to be linear runtime complexity?.


*/

// empty object
// add each unique number as a key, with a value of 1
// if the number pops again, increment key value
// after iterating through the array, return object key that has the value of 1

// solution #1
function findSingle(numArr) {
    let numCounts = {};

    for (let i = 0; i < numArr.length; i++) {
        if(numCounts.hasOwnProperty(numArr[i])) {
            numCounts[numArr[i]]++;
        }
        else {
            numCounts[numArr[i]] = 1;
        }
    }
    return Object.entries(numCounts).filter(([key, value]) => {return value == 1;})[0][0];
}

console.log(findSingle([4, 1, 2, 1, 2]));


// solution #2
arr = [4, 1, 2, 1, 2];

let result = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));

console.log(result.toString());
