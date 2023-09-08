// => string
const employeeName:string = "John";
console.log(employeeName);

// => number
const employeeSalary : number = 58000;
console.log(`Salary: ${employeeSalary}`);

// => boolean
const isManager : boolean = true;
console.log(`Is Manager: ${isManager}`);

// => object
//How can you define a type of an object. We define it with a keyword called interface.
// In TypeScript, an interface is a way to define the structure or shape of an object. 
// It provides a contract or blueprint for defining the properties and methods that an object must have. 
// Interfaces are used to enforce a specific structure and ensure type safety in TypeScript code.
//By default the parameters inside the object Mobile are mandatory. If we forgot to write any one parameter at the time of declaring, It will throw an error. 
//To make a parameter optional, we have to use ? while defining the particular property in interface.
//We can change the value inside of an object even though it's declared as const.

interface Mobile {         //have to define interface starting with a capital letter
    brandname : string;
    color? : string;  //optional
    price : number;
};

const mobileOne:Mobile = {
    brandname : "One Plus",
    price : 36000,
}

console.log(mobileOne);

// => arrays
const techs: string[] = ["Java", "HTML", "CSS"];
console.log(techs);

//here techs is a type of strings of an array.
//It will throw an error, if we insert a number to this array. 
//It will throw an error, if we change the type to number and the values are strings. 

// => Enum
/**
 * In TypeScript, an enum is a data type that allows you to define a set of named constants. 
 * It provides a way to represent a group of related values as a single, distinct type.
 * We can not change a value that declares with Enum. It's a read only value. 
 * Have to declare it starting with a capital letter. 
 */

enum Color{
    Red,
    Green,
    Blue
};

console.log(Color.Blue);  //Output: 2

/**
 * In the above example, we define an enum called Color, which represents a set of colors. 
 * The enum defines three constants: Red, Green, and Blue. 
 * By default, these constants are assigned numeric values starting from 0 (Red is 0, Green is 1, Blue is 2, and so on).
 * We then declare a variable myColor of type Color and assign it the value Color.Green. When we log myColor, it outputs the numeric value associated with Color.Green, which is 1.
 */


/**
 * Enums in TypeScript can also be assigned custom numeric values or string values explicitly. 
 */

enum Directions {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
console.log(Directions.Right);

enum Months {
    Jan = "January",
    Feb = "February",
    Mar = "March",
    Apr = "April"
}
console.log(Months.Jan);
//Months.Jan = "July"
/**
 * Re-assigning a value inside an enum will throw an error, cause enum is a constant read-only value. 
 */

// => Any
/**
 * Any is a data type that can accept any type of data. Be it a number or string or boolean or boolean or object or array.
 */
let abc : any = 10;
abc = "hello";
abc = true;
abc = [];
abc = {};
