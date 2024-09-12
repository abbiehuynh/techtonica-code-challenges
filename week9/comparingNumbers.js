// psuedocode 
// input: str1, str2 - version control numbers
// output:
    // str1 > str2 => 1
    // str1 < str2 => -1
    // str1 = str2 => 0

// ex: str1 = 1.2, str2 = 1.10.3
// version comes after is greater (str2)
// 1.000010.3 = 1.10.3

// think of . as delimiters, can use to join numbers 


function compare(str1, str2) {
// split strings based on . 
let str1Arr = str1.split(".");
// console.log(str1Arr);

let str2Arr = str2.split(".");
// console.log(str2Arr);


// compare each value using loop
for (let i = 0; i < str1Arr.length; i++) {
    // convert strings into numbers
    let str1Num = Number(str1Arr[i]);

    let str2Num = Number(str2Arr[i]);

    // console.log(str1Arr[i]);
    if (str1Num > str2Num) {
        return 1;
    }
     if (str1Num < str2Num) {
        return -1;
    } 
}
return 0;

// if statements
    // str1 > str2 => 1
    // str1 < str2 => -1
    // str1 = str2 => 0
    // return num 
}

console.log(compare(("1.00010.3"), ("1.10.3"))); // 0
console.log(compare(("1.20.3"), ("1.10.3"))); // 1
console.log(compare(("1.0.6"), ("1.30.3"))); // -1