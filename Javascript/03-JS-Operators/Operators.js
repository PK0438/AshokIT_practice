/** 
 * Javascript Operators
 * 1. Mathematical operators + - * /
 * 2. Shorthand math operators += -= /= *=
 * 3. conditional operator < > <= >= !==
 * 4. logicl operator && ||
 * 5. Increment, decrement operator ++ -- 
 * 6. ternary operator ?:
 * 7. equality operator == ===
 */

//1. Mathematical operators + - * / %

const num1 = 20;
const num2 = 30;
console.log(`Sum: ${num1 + num2}`); // Only + is used for adding strings and numbers
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num2 / num1}`);
console.log(`Modulas: ${num2 % num1}`);

//2. Shorthand math operators += -= /= *= (no space in between, together is an operator)
/** Adding a variable with something and storing it in the same location, 
 * var = var + (something) => var += (something) 
 * var = var - (something) => var -= (something) 
 * var = var * (something) => var *= (something) 
 * var = var / (something) => var /= (something) 
 * */

let a = 10;
let b = 20;
a += b;
console.log(`a = ${a}`);

let price = 100;
let qty = 5;
let total = 10;
// total = total + (price * qty);
total += (price * qty);
console.log(total);
 
// 3. conditional operator < > <= >= !==
  /**
   * qty >= 10 -> available
   * qty < 10 -> runningOut
   * qty == 0 -> outOfStock
   */
let availableQty = 10;
let result = "";

if (availableQty >= 10) {
    result = "Available";
} else if (availableQty < 10 && availableQty > 0) {
    result = "Running out"; 
} else {
    result = "Out of Stock!"
}
console.log( `Produt status: ${result}`);

// 4. Logical operators && ||
const courseFinished = true;
const projectsFinished =2;
result = ""; //declared in above example

if (courseFinished && projectsFinished >= 2) {
    result = "You're ready for the job"
} else {
    result = "Please complete the Projects"
}
console.log(result);

// 5. Increment, decrement operator ++ -- 
 let theNumber = 10;
 theNumber = theNumber + 1; //11
 theNumber += 1; //12
 theNumber++; //13 (It will increment by one number only)
 console.log(`theNumber: ${theNumber}`);

 let decNumber = 20;
decNumber = decNumber - 1; //19
decNumber -= 1; //18
decNumber--; //17 (It will decrement by one number only)
 console.log(`decNumber: ${decNumber}`);

 // 6. ternary operator ?:

/**
 * (condition) ? ifStatement : elseStatement 
 * shortcut to if-else condition.
 * let's take above example used in logical operator 
 */
result = "";
(courseFinished && projectsFinished >= 3) ? //condition
    result = "You're ready for the job" : result = "Please complete the Projects" ;

console.log(`Ternary operator result: ${result}`);

// 7. equality operator == === 
/**
 *  == compares the data only
 *  === compares the data and data type
 *  In JS we mostly use  === only. 
 */

let x = 10;
let y = 10;
 // write an if condition using ternary operator to compare here. 

(x === y) ? console.log("Both are equal") : console.log("Both are not equal"); 

y = 20; //changing the Y value here. 
(x === y) ? console.log("Both are equal") : console.log("Both are not equal"); 

// Using === for objects. 
let mobileOne = {
    brand: "Apple",
    color: "Silver",
    price: "75000"
};
let mobileTwo = {
    brand: "Apple",
    color: "Silver",
    price: "75000"
};
//To compare two objects we have to convert the objects to JSON string like below. 
(JSON.stringify(mobileOne) === JSON.stringify(mobileTwo)) ? 
    console.log("Equal") : console.log("Not equal");

//another methode of comparing obects
if (Object.entries(mobileOne).toString() === Object.entries(mobileTwo).toString()) {
    console.log("Equal")
} else {
    console.log("Not equal")
};