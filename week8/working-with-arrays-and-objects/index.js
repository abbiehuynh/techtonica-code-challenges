// Create a function named filterObjects that takes two arguments: an array of objects (data) and a string representing a property name (propertyName). 
// The function should return a new array containing only the objects from the original array whose value for the specified property matches the provided value. 
// If no objects match the criteria, the function should return an empty array.

// with trios: Xiahui & Christina

function filterObjects(data, propertyName) {
    //initialize an empty array for return
    let result = [];

    // iterate the array and compare object name with propertyName
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === propertyName) {

            // if matches, push the object inside the return array
            result.push(data[i]);
        }
    }
    // else, return an empty array
    return result;
}

