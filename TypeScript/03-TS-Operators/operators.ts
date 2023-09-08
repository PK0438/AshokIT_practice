import { wishMsg } from "../04-TS-Functions/functions";

wishMsg("Pramod");

let marks:number = 65;
let result:string = "";
if (marks >=35) {
    result = "You are pass";
} else {
    result = "You are failed";
};

console.log(result);

//Print numbers
result = "";
for(let i:number = 0; i<=20; i++) {
    result += `${i}`
}
console.log(result);