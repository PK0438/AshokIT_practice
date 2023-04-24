//Asnyc Await

/**
 * Make coffee
 * 1. Get milk from Shop
 * 2. Boil Milk
 * 3. Add sugar and coffee
 */

const getMilkFromShop = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isDone = true;
      if (isDone) {
        resolve("1. Get milk from Shop");
      } else {
        reject("Step 1 failed");
      }
    }, 2000);
  });
}

const boilMilk = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isDone = true;
      if (isDone) {
        resolve("2. Boil Milk");
      } else {
        reject("step 2 failed");
      }
    }, 1000);
  });
}

const addSugarAndCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isDone = true;
      if (isDone) {
        resolve("3. Add sugar and coffee");
      } else {
        reject("step 3 failed");
      }
    }, 3000);
  });
}

const makeCoffee = async () => {
  try{
    let result = await getMilkFromShop();
    console.log(result);
    result = await boilMilk();
    console.log(result);
    result = await addSugarAndCoffee();
    console.log(result);
  } catch(error) {
    console.log(error)
  }
};

makeCoffee();