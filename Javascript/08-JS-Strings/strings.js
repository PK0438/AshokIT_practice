/**
 * Strings
 */

let message = "Good Morning";
console.log("message to Upper case => ", message.toUpperCase());   
console.log("message to Lower case => ", message.toLowerCase());  
console.log("message to reverse => ", message.split("").reverse().join(""));
console.log("message length => ", message.length);
console.log("message substring => ", message.substring(0, 4));
console.log("message substring => ", message.substring(5, 12));
console.log("message substring with starting index only => ", message.substring(3)); //If we give only starting index, it will print from that index to the end index

/**
 * GOOD -> str.substring(0, str.length - 0)
 * GOO  -> str.substring(0, str.length - 1)
 * GO   -> str.substring(0, str.length - 2)
 * G    -> str.substring(0, str.length - 3)
 */

const printTriOne = (str) => {
    let result = "";
    for(let i=0; i< str.length; i++) {
        result += `${str.substring(0, str.length-i)} \n`
    }
    return result;
}
let result = printTriOne("PRAMODKUMAR");
console.log(result);

/**
 * G     -> str.substring(0, str.length - 3)
 * GO    -> str.substring(0, str.length - 2)
 * GOO   -> str.substring(0, str.length - 1)
 * GOOD  -> str.substring(0, str.length - 0)
 */

const printTriTwo = (str) => {
    let result = "";
    for(i = str.length-1; i >= 0; i--){
        result += `${str.substring(0,str.length - i)} \n`;
    }
    return result;
}
result = printTriTwo("PRAMODKUMAR");  // result is already declared in the line number 28
console.log(result);

/**
 * GOOD
 *  OOD
 *   OD
 *    D
 */

/**
 *    D
 *   OD
 *  OOD
 * GOOD
 */