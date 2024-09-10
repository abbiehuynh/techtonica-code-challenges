// Sorting an Array of Objects by a Key [Sort]
const users = [
    { name: 'Alice', age: 30 },
    { name: 'David', age: 25 },
    { name: 'Charlie', age: 35 }
   ];
   
   // compares names in ascending order
   users.sort((a, b) => a.name.localeCompare(b.name));
   console.log(users);
   
   // compares ages in ascending order
   users.sort((a, b) => a.age < b.age ? -1 : 1);
   console.log(users);
   
   
   
   // Checking if Any Element in an Array Meets a Condition [Some]
   const numbers = [1, 2, 3, 4, 5];
   
   // checks if some numbers are even 
   const even = (num) => num % 2 === 0;
   console.log(numbers.some(even));
    // returns true is some are even
    // returns false if none are even

   // checks if some numbers are odd
   const odd = (num) => num % 2 === 1;
   console.log(numbers.some(odd));
    // returns true if some are odd
    // returns false if none are odd

    // checks if some numbers are over 10
   const over10 = (num) => num > 10;
   console.log(numbers.some(over10));
    // returns true if some numbers are over 10
    // returns false if none are over 10
   
   
   
   // Checking if All Elements in an Array Meet a Condition [Every]
   const evenNumbers = [1, 2, 3, 4, 5];
   
   // checks if every number is even
   const even = (num) => num % 2 === 0;
   console.log(evenNumbers.every(even));
    // returns true if all numbers are even
    // returns false if even one number is not even