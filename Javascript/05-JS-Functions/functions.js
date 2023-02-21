/**
 * 1. Normal function
 * 2. Function expression
 * 3. Arrow Function
 */

// normal function
function printNF(startNumber, endNumber) {
    let result = "";
    if (startNumber <= endNumber) {
        for (let a = startNumber; a <= endNumber; a++) {
            result += `${a} `;
        }
    } else {
        result = "Start number should be less than end number";
    }
    console.log(result);
}

printNF(5, 100);

//Example: Print all the even numbers between startNum and endNum
function printEven(startNum, endNum){
	let result = "";
  if(startNum % 2 == 0) {
  	for(let i = startNum; i <= endNum; i = i+2){
    	result += `${i} `;
    }
  } else {
  	for(let j = startNum+1; j <= endNum; j= j+2){
    	result += `${j} `;
    }
  }
  console.log("All the even numbers between them =>",result);
}

printEven(9,35);

// function expression
const printFE = function (startNumber, endNumber) {
    let result = "";
    if (startNumber <= endNumber) {
        for (let a = startNumber; a <= endNumber; a++) {
            result += `${a} `;
        }
    } else {
        result = "Start number should be less than end number";
    }
    console.log(result);
};
printFE(5, 100);

// Arrow function
const printAF = (startNumber, endNumber) => {
    let result = "";
    if (startNumber <= endNumber) {
        for (let a = startNumber; a <= endNumber; a++) {
            result += `${a} `;
        }
    } else {
        result = "Start number should be less than end number";
    }
    console.log(result);
};
printAF(5, 100);

let num1 = 10;


// function with return type
const sum = (a, b) => {
    return a + b;
};
const mul = (a, b) => {
    return a * b;
};
let sumResult = sum(10, 20);
let mulResult = mul(10, 20);

const calc = (x, y) => {
    console.log(x + y);
};
calc(sumResult, mulResult);

// Scopes
let a = 10;
const greetOne = (a, b) => {
    console.log(a + b);
};
greetOne(20, 30);

// Prepare Coffee
/**
 * 1. Get Milk from Shop
 * 2. Boil milk with water
 * 3. add sugar & coffee
 */
const getMilkFromShop = (money) => {
    let milk = `milk worth ${money}rs`;
    return milk;
}

const boilMilk = (milk, water) => {
    let result = `Boiling ${milk} with ${water}`;
    return result;
};

const addSugar = (sugar, coffee, milk) => {
    let coffeeResult = `Mixed with ${sugar} ${coffee} ${milk}`;
    return coffeeResult;
};

const makeCoffee = () => {
    let money = 20;
    let milk = getMilkFromShop(money);
    let water = "50ml Water";
    let boiledMilk = boilMilk(milk, water);
    let sugar = "50gr Sugar";
    let coffeePower = "10gr Coffee";
    let coffee = addSugar(sugar, coffeePower, boiledMilk);
    console.log(coffee);
};
makeCoffee();






