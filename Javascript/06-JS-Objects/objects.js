//object example

const mobile = {
  brand: "apple",
  color: "black",
  price: 85000,
};
console.log("to print whole object =>", mobile);
//get objects props/keys using dot notation
console.log("to print first element =>", `Brand: ${mobile.brand}`); // calliing it with a dot notation followed by the props/key name
console.log("to print second element =>", `Color: ${mobile.color}`);
console.log("to print third element =>", `Price: ${mobile.price}`);

//get objects props/keys using [] notation
console.log(`Brand: ${mobile["brand"]}`);
console.log(`Color: ${mobile["color"]}`);
console.log(`Price: ${mobile["price"]}`);

//trying to access the data which is not there in the object
console.log(`Camera: ${mobile.camera}`);
/** In this case Javascript doesn't throw any error instead it will return undefined */

//accessing dynamic props - where you cannot use dot notation to access.
/** Let us assue that you know the data in the object. We have only key/prop name */
const keyName = "brand";
console.log(`Key name: ${mobile.keyName}`); //it will return undefined because it will check for the key name as "keyName" in the mobile object. Which is not exists.
console.log(`Key name: ${mobile[keyName]}`); //In this scenario, it will replace the keyName in this line with the value that we are assigned in line number 25. So it will take "brand" as is with the quotes. No need to add quotes again here.

//Changing the data in the object
console.log(mobile);
mobile.price = 90000; //changing the price using dot notation
console.log(mobile);
mobile.color = "Pink"; //changing the color using dot notation
console.log(mobile);

//adding a new key, value to the object
mobile.camera = "32mp";
console.log(mobile);

//Data manipulation using spread operator. spread operator denotes with 3 dots together. (...)

let car = {
  brand: "Toyota",
  model: "Innova",
  price: "24L",
  color: "white",
};
console.log(car);

let newCar = {
  ...car, //It will copy the key, values from the car object into the newCar object
  milage: "8kmpl", //It will add a new key, value to the newCar object
  color: "Black", //It will manipulates the data that took from the car object - changing the existing data
};
console.log("New car =>", newCar);

//Nested object - Object inside objects
let patientDetails = {
  name: {
    fName: "John",
    lName: "Truchel",
  },
  age: 45,
  address: {
    street: "401 St.Peters walk",
    city: "Long beach",
    state: "California",
    zipCode: "91911",
  },
};
//here patientDetails is the parent object and name and address are the child objects to the parent object which are also called as nested objects.
console.log(patientDetails);
console.log(patientDetails.name); //Printing the name child object
console.log(patientDetails.name.fName); //accessing the values inside a child object

console.log(`Street: ${patientDetails.address.street},
            City: ${patientDetails.address.city},
            State: ${patientDetails.address.state},
            Zip code: ${patientDetails.address.zipCode},
`);

/** Let us assume that if we have a lot of nested objects, if we have to access the last child objects data, It will difficult to access it with the dot notation.
 *  That's where destructuring comes in.
 */

// Object destructuring
let {street: patientStreet /**alias naming */, city, state} = patientDetails.address; //destructure the object and store the nested objects data. Here we can access street, city, state values from the address nested object. but not zipcode. 
console.log(`Street: ${patientStreet}, 
City: ${city},
State: ${state},
`);                     // you cannot mix parent and child objects data together while destructuring. 
//console.log(`Zip code: ${zipCode}`);    =>It will throw an error since we didn't mention zip code as a property at the time of destructuring. 

let street = "abc street";  // => It will throw an error since the street variable is already declared in line 87 globally. you cannot redeclare it. We can declare if it has alias name.

//looping in objects
/**
 * Available functions to loop through objeccts
 * => Object.keys(),  // 'O' capital in Object
 * => Object.values(),
 * => Object.entries() // It will fetch the key value pairs in an object
 */
 
console.log(Object.keys(mobile));             //It will gives an array
console.log(Object.values(mobile));
console.log(Object.entries(mobile));
console.log(Object.entries(patientDetails));

/**
 * Iteration using for loop
 */
for(let key of Object.keys(mobile)) {
    console.log(key);
}

for(let values of Object.values(mobile)) {
    console.log(values);
}

for(let entries of Object.entries(mobile)) {
    console.log(entries); //it will give individual arrays. 
}

for(let [key, value] of Object.entries(mobile)) {
    console.log(`key: ${key} value: ${value}`);
}

/**
 * CONVERTING
 * => Object to JSON string  ->  JSON.stringify()
 * => JSON string to Object  ->  JSON.parse()
 */
console.log("Normal object =>", mobile);
const jsonMobile = JSON.stringify(mobile);
console.log("JSON string =>", jsonMobile);
console.log("JSON string to Object =>", JSON.parse(jsonMobile));