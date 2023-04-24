

/**
 * Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. 
 * Tasks can run simultaneously. 
 * Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.
 */


console.log("statement 1");
console.log("statement 2");
setTimeout(()=>{
    console.log("statement 3");
}, 5000)
console.log("statement 4");
console.log("statement 5");
console.log("statement 6");


/**
 * Callbacks
 *  A function which takes an another function as parameter, and calls that function, once the actula function finishes exicuting.
 */

const sum = (a, b) => {
    return a+b;
}

const calculate = (num1, num2, sum) => {  //here sum is an another function that's passign to an another function
    let result = sum(num1, num2);
    console.log(result + 20);
}

calculate(5, 15, sum); //result: 40

//Another way: passing the whole function as a parameter

calculate(10, 20, (a, b) => {
    return b - a;
});

// result: 20-10 + 20 = 30;