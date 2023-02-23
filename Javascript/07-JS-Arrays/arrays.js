/**
 * Collection of Objects is an array
 * => Object contains key value pairs whereas an array contains only value.
 * => To access individual values in an array, we have to use the index of the values. 
 * => Index is starts from '0'.
 * => If you want to access of the element that has an index out of bound you will simply get undefined. 
 * => There are lot of array methods. Refer the link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

let technologies = ["HTML", "CSS", "Bootstrap", "Javascript", "React"]
console.log("You can check the indexes of the array elements here => ",technologies);
console.log("Here 3rd index element is => ",technologies[3]);
console.log("Out of bound indexed element => ", technologies[25]);
console.log("To get the length of the array => ", technologies.length);

/**
 * Normal for loop to print the values in an array
 */
let result = "";
for(let i = 0; i < technologies.length; i++){
  result = result + ` ${technologies[i]}`;
 // console.log("It will print the index => ",i);
 // console.log("It will print the value => ",technologies[i]);
}
console.log("It will print the array elements side by side => ",result)

/**
 * for-in loop
 * => We will get the index in every iteration
 */
result = "";
for(let index in technologies) {        //we can give any name in the place of index but using index/i/inx are appropriate
    result = result + ` ${technologies[index]}`;
}
console.log("for-in loop => ", result);

/**
 * for-of loop
 * => We will get the element in every iteration
 */
result = "";
for(let tech of technologies) {
  result = result + ` ${tech}`; // Since we directly get the element, no need to pass the index here. 
}
console.log("for-of loop =>", result);

/**
 * forEach function
 * => This is the predefined function available in JS for looping/iteration
 */
result = "";
technologies.forEach(function(tech) {
  result = result + ` ${tech}`;
});
console.log("forEach function =>", result);

/**
 * forEach using an Arrow function
 */
result = "";
technologies.forEach((tech) => {
  result = result + ` ${tech}`;
});
console.log("forEach - Arrow function =>", result);

/**
 * Javascript array methodes
 * => There are lot of array methods. Refer the link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

console.log("it will gives the complete array", technologies);

//unshift
technologies.unshift("Node.JS"); //Unshift - adds an element at the starting of an array
console.log("Unshift => ", technologies);
//shift
technologies.shift();   //shift - removes an element at the starting of an array
console.log("shift = > ", technologies);
//push
technologies.push("MongoDB"); //push - adds an element at the end of an array
console.log("push => ", technologies);
//pop
technologies.pop();   //pop - removes an element at the end of an array
console.log("pop = > ", technologies);
//join
console.log("join => ", technologies.join(" - "));  //join - join all the elements with the given seperator " - "
//split
const str = technologies.join(" - ");
console.log("join => ", str);
const array = str.split(" - ") //split - splits the array back to normal. removes the seperator
console.log("split => ", array);


/**
 * Array of Objects
 */
let employees = [
  {
    sno: "SV001",
    name: "John",
    age: 32,
    designation: "Senior Software Engineer"
  },
  {
    sno: "SV002",
    name: "Oleg",
    age: 27,
    designation: "Tech lead"
  },
  {
    sno: "SV003",
    name: "Claudia",
    age: 30,
    designation: "Technical Manager"
  },
  {
    sno: "SV004",
    name: "Mary",
    age: 37,
    designation: "Director of Technology"
  },
  {
    sno: "SV005",
    name: "Cary",
    age: 45,
    designation: "Chief Technology Officer"
  },
]
console.log("To print complete array =>", employees)

//get an employee
const getEmployee = (empId) => {
  for(let employee of employees) {
    if (employee.sno === empId) {
      return employee;
    }
  }
};

const checkEmployee = getEmployee("SV003"); //you will get the employee details of that particular ID you pass here
console.log(checkEmployee);

//find -  you can get the same result as above with minimal code
const getEmployeeDetails = (empId) => {
   let employee = employees.find(employee => {
      return employee.sno === empId;
    })
    return employee;
};
const verifyEmployee = getEmployeeDetails("SV001");
console.log(verifyEmployee);

//filtering an array
const getAllJuniorEmp = () => {
  let jrEmp = [];
  for(let employee of employees) {
    if(employee.age <= 30){
      jrEmp.push(employee);
    }
  }
    return jrEmp;
}
let jrEmp = getAllJuniorEmp(employees);
console.log(jrEmp);