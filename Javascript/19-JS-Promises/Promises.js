//Promises by using the callbacks

// const fetchInfo = (success, failure) => {
// 	let isInfoAvail = true;
//   if(isInfoAvail) {
//   	success('Got the info from server');
//   } else {
//   	failure('Server is not responding');
//   }
// };

// const success = (message) => {
// 	console.log(message);
// }

// const failure = (error) => {
// 	console.log(error);
// }

// fetchInfo(success, failure);




//JAVASCRIPT PROMISES

const getDataFromServer = new Promise((resolve, reject) => {
    //fetching the data from the server
    let theData = {name: "Rajan"};
    if(theData){
        resolve(theData)
    } else {
        reject("Data not found")
    };  
})

getDataFromServer.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


//make Promise as a function.

const getDataFromServerFn = () => {
    return new Promise((resolve, reject) => {
        //fetching the data from the server
        let theData = {name: "Rajan"};
        if(theData){
            resolve(theData)
        } else {
            reject("Data not found")
        };  
    })
}

getDataFromServerFn().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

/**
 * Make coffee
 * 1. Get milk from Shop
 * 2. Boil Milk
 * 3. Add sugar and coffee
 */

const getMilkFromShop = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("1. Get milk from Shop");
    } else {
      reject("Step 1 failed");
    }
  }, 2000);
});

const boilMilk = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("2. Boil Milk");
    } else {
      reject("step 2 failed");
    }
  }, 1000);
});

const addSugarAndCoffee = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("3. Add sugar and coffee");
    } else {
      reject("step 3 failed");
    }
  }, 3000);
});

const makeCoffee = () => {
  getMilkFromShop
    .then((result) => {
      console.log(result);
      boilMilk
        .then((result) => {
          console.log(result);
          addSugarAndCoffee
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

makeCoffee();