const printTriOne = (str) => {                              //making triangle text
    let result = "";
    for(let i=0; i< str.length; i++) {
        result += `${str.substring(0, str.length-i)} \n`
    }
    return result;
}

const inputBox = document.querySelector("#text-input");                          //getting the input element
inputBox.addEventListener("input", (event) => {                                       //pass the event to the listenert. adding event listener that listens to the event which means the key strokes of the user
    //we can use keyup and keydown in place of input event above. input is more efficient
    // alert(event.target.value)                        the targeted element on which the event is happening. testing with the alert whether we are getting the event given by the user or not. 
    document.querySelector("#text-display").textContent = printTriOne(event.target.value);        //printing the events given by the user
})