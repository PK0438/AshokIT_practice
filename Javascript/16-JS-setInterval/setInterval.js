/**
 * setInterval
 * setTimeout
 * clearTimeout
 */


let count = 0;
//console.log(new Date().toLocaleTimeString());
const greet = () => {
    console.log(new Date().toLocaleTimeString());
    count ++;
    console.log("Hi", count);
}

/**
  setInterval(() => {                 //It calls the greet function for every 1000 milli seconds which means per every second
    greet();
}, 1000);
 */

//Every iteration of setinterval has an Id called intervalId. 
const intervalId = setInterval(() => {                 //It calls the greet function for every 1000 milli seconds which means per every second
    greet();
}, 1000);

//in order to stop the iteration after 5 seconds, we have to pass the intervalId to the clearInterval function inside setTimeout.
setTimeout(() => {                                      //It calls the greet function only once after 5000 milli seconds. 
    clearInterval(intervalId);
}, 5000)


