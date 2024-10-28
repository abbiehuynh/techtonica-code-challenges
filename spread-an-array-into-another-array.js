/*
WEEk 7 CODE CHALLENGE ~
Write a JavaScript function that takes two arrays as input 
and returns a new array that contains all elements 
from both input arrays. Use the spread operator (...) 
to achieve this.

*/
//// method 1 
// function combineArrays(arr1, arr2) {
//     // use spread opeartor (...) to combine all elements from both arrays - arr1, arr2
//     const newArray = [...arr1, ...arr2];
  
//     // return a new array - contains all elements from both input arrays
//     return newArray;
// }

//// method 2 - concat
// function combineArrays(arr1, arr2) {
//     const newArray = arr1.concat(...arr2);
//     return newArray;
// }

// method 3 - reduce
function combineArrays(arr1, arr2) {
    const newArray = arr2.reduce((acc, item) => [...acc, item], [...arr1]);
      return newArray;
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(combineArrays(["dogs", "cats", "bunnies"], [4, 5, 6])); // ["dogs", "cats", "bunnies", 4, 5, 6]
console.log(combineArrays(["dogs", "cats", "bunnies"], ["bunnies", "cats", "dogs"])); // ["dogs", "cats", "bunnies", "bunnies", "cats", "dogs"]
console.log(combineArrays([1, 2, 3], ["bunnies", "cats", "dogs"]));