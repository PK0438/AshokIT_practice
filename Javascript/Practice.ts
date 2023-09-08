let myNum: number = 10;
console.log(myNum);
 
myNum = 250;
console.log(myNum);

const myName: string ="Pramod";

console.log(typeof myName);

const myNumArray: any[] = ["Pramod", true, 438]
console.log(myNumArray[1]);

const indScore: number = 350;
const wiScore: number = 295;
if (indScore > wiScore) {
    console.log(`India won by ${(indScore)-(wiScore)} runs`)
} else {
    console.log(`West Indies won by ${(wiScore)-(indScore)} runs`)
};

const userLoggedIn: boolean = false;
console.log(`Did user logged in to the system? ${userLoggedIn}`);


interface employeeData {
    employeeName: string;
    department?:string;
    phone: number[];
    id: number;
    address : {
        streetAddress: string;
        city: string;
        state: string;
        zipCode:number;
    }
};

const emp1: employeeData = {
    employeeName: "Pramod",
    //department:"IT",
    phone: [4696612347, 9100372103],
    id:89456,
    address:{
        streetAddress :"B-2/C-10, Gurgaon Main Rd",
        city:'Gurgaon',
        state:'Haryana',
        zipCode:122001
        },
        };

        console.log(emp1.address.state);
        console.log(emp1.phone[1]);
        console.log(emp1.department);

    emp1.id = 6542265;

    console.log(emp1.id);

const engMarks: number = 250;
const mathMarks: number = 178;
const totalMarks: string|number = engMarks + mathMarks;
console.log("totalMarks => ",totalMarks)

const interestRate: number = 0.7568;
console.log(Math.round(interestRate));

enum versionId {
    v1,
    v2=4,
    v3="hello world"
}
console.log(versionId.v3);

const emptyFun = ():void => {
    console.log("It returns nothing")
}
emptyFun();

const multy = (a: number, b: number) => {
    const result: number = a * b;
    return console.log(result);     
};

multy(25, 10);

const budget: number = 100;
const currentBdg: number = 200; 

if(currentBdg > budget) {
    let msg: string = "";
    console.log(msg = "It's a 100cr+ movie.");
} else {
    let msg: string = "";
    console.log(msg = "It's a low budget movie.");
};

for (let i = 0; i < 5; i++) {
     let msg: string = "Hello all";
    console.log(msg);

}
   