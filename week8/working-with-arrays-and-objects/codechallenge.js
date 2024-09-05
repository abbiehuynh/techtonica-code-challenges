// Create a function named filterObjects that takes two arguments: an array of objects (data) 
 // and a string representing a property name (propertyName). 
// The function should return a new array containing only the objects from the original 
    //array whose value for the specified property matches the provided value. 
// If no objects match the criteria, the function should return an empty array.

// with MJ during Code Challenge

//psuedocode
// input: arr of objects - data,  and string - propertyName
    // [{name: "Mac", age: "3"}, {name: "Oliver", age:"5"}], "name"
    // [{object: "pen"}, {object: "marker"}]
// output: new array - matches the value of the string
    // ["Mac", "Oliver"]
    // if no match => []

const data = [{name: "Mac", age: "3"}, {name: "Oliver", age:"5"}];

function filterObjects(data, propertyName) {
    let newArr = [];
    for (let obj of data) {
        if (obj.hasOwnProperty(propertyName)) {
            newArr.push(obj[propertyName]);
        }
    } 
    return newArr;
}

console.log(filterObjects(data, "name")); // ["Mac", "Oliver"]
console.log(filterObjects(data, "age")); // ["3","5"]
console.log(filterObjects(data, "object")); // []

// const data =  [
//     {name: "Abbie", age: 2},
//     {name: "MJ", age: 36}
//     ]
   
// const filterObjects = (data, propertyName) => {
//   let newArray = [];
// for(let obj of data) {
//  if(obj.hasOwnProperty(propertyName)) {
//       newArray.push(obj[propertyName])
//  }
// }
// return newArray 
// }

// console.log(filterObjects(data, "name"))

// ---------------------
// with cohort

const animalData = [
    {name: "Daisy", animal: "dog", age: 3},
    {name: "Luke", animal: "cat", age: 6},
    {name: "Han", animal: "cat", age: 6},
    {name: "Charlie", animal: "fish", age: 6},
    {name: "Sugar", animal: "dog", age: 1},
    {name: "Bear", animal: "dog", age: 1},
    {name: "Slinky", animal: "ferret", age: 3}
  ]

function findAnimal(data, propName, value) {
    return data.filter((obj) => obj[`${propName}`] === value);
}

console.log(findAnimal(animalData, "name", "Daisy"));
console.log(findAnimal(animalData, "name", "Peter"));