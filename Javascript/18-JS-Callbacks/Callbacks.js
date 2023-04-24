/**
 * Callback Functions
 */

/**
 * Make coffee
 * 1. Get milk from Shop
 * 2. Boil Milk
 * 3. Add sugar and coffee
 */

const getMilkFromShop = (boilMilk, addSugarAndCoffee) => {
    setTimeout(()=> {
        console.log("1. Get milk from Shop");
        boilMilk(addSugarAndCoffee);
    }, 2000);
}

const boilMilk = (addSugarAndCoffee) => {
   setTimeout(()=> {
    console.log("2. Boil Milk");
    addSugarAndCoffee();
   }, 1000);
}

const addSugarAndCoffee = () => {
    setTimeout(()=> {
        console.log("3. Add sugar and coffee");
    }, 1500)
}

const makeCoffee = () => {
    getMilkFromShop(boilMilk, addSugarAndCoffee );
}

makeCoffee();


/**
 * => every function has it's own timing to execute. Let us consider due to the api calls we set the timer to get the data from the server.
 * => to make asynchronus, or to make the functions to execute in a particular manner, we have to pass the further functions as parameters to the current executable functions. 
 */