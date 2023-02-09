/**
 * Statements
 * 1. if-else
 * 2. switch
 * 3. for-loop
 * 4. while - not in the ussage
 * 5. do-while - not in the ussage
 */

// 1. if-else - 
/**
 * if(condition){
 *      // true statement
 *   } 
 * else if(condition) {
 *      if(condition){           //nested if condition, checking the condition inside a condition
 *      // true statement
 *     } 
 *   }
 * else(condition) {
 *      // false statement
 *   }
 */

const currentTIme = 15;
let message = "";
if(currentTIme > 0 && currentTIme <= 12) {
    message = "Good morning";
}
else if(currentTIme > 12 && currentTIme <= 17) {
    message = "Good afternoon";
}
else if (currentTIme > 17 && currentTIme <= 23) {
    message = "Good evening";
} else {
    message = "Invalid time";
}
console.log(message);

//2. switch -  If we have multiple if and else conditions we can go with switch. 
/**
 * switch(condition) {
 *  case match1:
 *      //statements
 *      return;
 *     case match2:
 *      //statements
 *      return;
 *     default:
 *      //statements
 *      return;
 * }
 */

console.log(new Date().getDay());

const today = new Date().getDay();
let fullDay = "";

switch(today) {
    case 0:
        fullDay = "Sunday";
        break;
    case 1:
        fullDay = "Monday";
        break;
    case 2:
        fullDay = "Tuesday";
        break;
    case 3:
        fullDay = "Wednesday";
        break;
    case 4:
        fullDay = "Thursday";
        break;
    case 5:
        fullDay = "Friday";
        break;
    case 6:
        fullDay = "Saturday";
        break;
}

console.log(fullDay);

// 3. for-loop -  for iterations
/**
 * for(initialization, consition, increment/decrement){
 *          //statements
 * }
 */

//Print 0-10 numbers
let result = "";
for( let a=0; a<=10; a++) {
    console.log(a);
    result = result + `${a}`; // result  += `${a}` (both same)
}
console.log(result);

/** 
 * print from 40 to 0 with difference 2
 */

result = ""; //declared in above example with let
for( let a = 40; a >= 0; a -= 2 ){
    result += `${a}`
}
console.log(result);

/**
 * Print the 5 stars in ascending order. 
 *      *
 *      **
 *      ***
 *      ****
 *      *****
 */

result = ""; //declared in above example with let
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        result += `* `;
    }
    result += `\n`;
}
console.log(result);