/**
 * Data types
 * 1. string
 * 2. number
 * 3. boolean
 * 4. array
 * 5. object
 */

const employeeName = "Tim Cook"; // any word/ word+number is a string. single and double quotes both works
console.log(typeof employeeName);
console.log("Eployee name: " + employeeName); //concatinating and old way to represent
console.log("Eployee name: " + employeeName + ", type: " + typeof employeeName);

console.log(`Eployee name: ${employeeName}`); // latest way. representing with backtick
console.log(`Eployee name: ${employeeName}, type: ${typeof employeeName} `);

const score = 120; // any number is considered as a number.(integer, decimal etc.,)
console.log(typeof score);
console.log(`India restricted Astralia for ${score}`);

const isLoggedIn = true; //true/fales, only small case
console.log(typeof isLoggedIn);
console.log(`User loggedin: ${isLoggedIn}`);

//Array => club the different data types. 
const students = ["kiran", 'suresh', 'john', 'mohammad'] //each value can carry an index and is starts with 0
console.log(students[0]);
const kiranData = ["kiran", 15, true, {
    class: 10,
    grade: "B",
    isPass: true
}]
console.log(kiranData[3]); 
console.log(kiranData[3].grade);// accessing the nested object inside an array


//object => an object can have multiple properties with different data types. 
const employeeInfo = {          // represent inside a curly braces and seperated with a comma
    name: "John",               // Can have strings
    age: 40,                    // can have numbers
    isManager: true,            // can have booleans
    address: {                  // can have multiple other objects inside a parent object
        houseNo: "2-100",
        street: "Wallstreet",
        city: "New York"
    },
    mobile: [9876546544, 1236549778] //// can have multiple other arrays inside a parent object
}

//accessing the data in an object
console.log(employeeInfo);                      //It will gives the complete object in alphabetical order. 
console.log(`Employee name: ${employeeInfo.name}`);                 // can access with the dot operator.
console.log(employeeInfo.age);
console.log(employeeInfo.isManager);
console.log(employeeInfo.address);              //It gives the object as is. 
console.log(employeeInfo.address.houseNo);      //accessing the data in the nexted object with dot operator.
console.log(employeeInfo.address.street);
console.log(employeeInfo.address.city);
console.log(employeeInfo.mobile);               //It gives the complete array.
console.log(employeeInfo.mobile[0]);            //accessing the data inside the array which is inside of an object with index. 
console.log(employeeInfo.mobile[1]);            //always use square brackets to access by index. index starts with 0.

//changing the data inside an object
employeeInfo.name = "Kiran";                    //can change the values inside an object using dot operator.
console.log(`changed employee name: ${employeeInfo.name}`); 
// we used const for the parent object. So we cannot change the parent object. We can only change the inside data. 

//Inserting data into the object
employeeInfo.eMail = "john@gmail.com";           //can insert new data using dot operator
console.log(employeeInfo);                       //can check the newly added data.

employeeInfo.address.pinCode = 506348;          //Inserting data in nested Object
console.log(employeeInfo);

employeeInfo.mobile[2] = 9999999999;
console.log(employeeInfo);                      //Inserting data in nested Array
//where as in TS, we cannot add the data other than declared variables and manipulate the data. 



