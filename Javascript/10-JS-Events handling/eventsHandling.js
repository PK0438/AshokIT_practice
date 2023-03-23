/**
 * Events handling: Any kind of activeity that you can perform on the browser is called an event
 * Ex: Clicking a button, hover, text box focus, form submitting, etc.,
 * => All such events are stored in the window object. 
 */


const h2Ele = document.querySelector("#card h2"); //Global variable and can access anywhere.

const clickGm = () => { 
    h2Ele.textContent = "Hello Good Morning";
    h2Ele.setAttribute("class", "red");
}

const clickGa = () => {
    h2Ele.textContent = "Hello Good Afternooon";
    h2Ele.setAttribute("class", "blue");
}

const clickGe = () => {
    h2Ele.textContent = "Hello Good Evening";
    h2Ele.setAttribute("class", "green");
}

