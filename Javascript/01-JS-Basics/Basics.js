/**
 * Javascript console statements
 * log
 * info
 * warn
 * error
 * table
 */
console.log("log : Welcome to Javascript");
console.info("info : Welcome to Javascript");
console.warn("warn : Welcome to Javascript");
console.error("error : Welcome to Javascript");
console.table({name: "John", age: 40, designation: "Manager"});

/**
 * Variable declaration
 * 1. camelCase
 * 2. use let, const
 * 3. don't start with a number
 * 4. allowed a-z, A-Z, 0-9, $, _
 * 5. Cannot redeclare the variable
 */
let a = 10; // "let" is a variable key word, "a" is avariable and the value 10 is storing in the variable "a"
console.log(a);

// let name = "Vicky";
// let Name = "Vicky"; //Both statements are different since Javascript is case sensitive. 

let securityEmployeeName = "John"; //camelCase lettering

let name = "Vicky"; // declararion , assignment
console.log(name);
name = "Tom"; // if you give "let" while re-assigning the value, you will get an error. 
console.log(name); //Re assigning the variable value.

const fruit = "banana";
console.log(fruit);
fruit = "apple"; // you cannot re assign a value to const variable. It will throw an error. 

// let 1name = "tony"; // not valid
let game$ = "Cricket"; //valid, you can give $ at the starting as well. 
let _name = "Sundar"; //Valid, you can give _ at the starting as well. 


