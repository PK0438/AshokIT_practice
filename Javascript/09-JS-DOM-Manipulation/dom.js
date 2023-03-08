/**
 * 
 * DOM Manipulation
----------------
DOM => Document Object Model => Tree like structure of the HTML document.
=> T his structure can be seen in the elements tab in inspect.
=> We have to manipulate the DOM(HTML document) using Javascript.
=> Javascript will access the HTML tags and modify them. 
 */

/**
 * Access the HTML Tags
 * => In the JS there are two global objects available to access the HTML page. 
 * 1. document object => It indicates entire HTML document => anything you deal with document is called DOM manipulation.
 * 2. window object => It represents the browser window => anything you deal with window is called Browser Object Model (BOM) manipulation.
 */

console.log("Whole HTML document => ", document);  //document object represents the entire HTML document. Here the document is changes whenever the respective HTML document changes. 

console.log("Head tag of the document => ", document.head); //accessing individual elements of a document
console.log("Body tag of the document => ", document.body);
console.log("TItle tag of the document => ", document.title);
//=> there are only single head, body and title tags for every HTML document. So that we can access them like above easily. 
//=> But when it comes to nav tags, there can be multiple nav tags in the HTML document. 
//=> To access such kinds of tags there are some functions in javascript. 
/**
 * Those are...
 * document.getElementById();           => It will pick the any html element with the particular ID
 * document.getElemetsByClassName();    => It will pick the any html element with the particular ClassName
 * document.getElementsByTagName();     => It will pick the any html element with the particular TagName
 * document.querySelector();            => It will pick the any html element with the particular query. here to access a particular element with an ID give #id(like in CSS). 
 *                                        -> to access an element with a particular class, give .className (like in CSS)
 *                                        -> to access a particular tag, give tag name directly. 
 */
// const navID = document.getElementById(navbar);
// console.log("Get element by ID => ", navID);

// const navClass = document.getElementsByClassName("main-nav");
// console.log("Get element by Class => ", navClass);

// const navTag = document.getElementsByTagName("nav");
// console.log("Get element by Tag => ", navTag);

const navQueryTag = document.querySelector("nav");
console.log("To get the whole nav tag => ", navQueryTag);

const navQueryAnchor = document.querySelector("nav a");
console.log("To get the anchor tag inside the nav tag => ", navQueryAnchor);

const navQueryWithClass = document.querySelector(".main-nav");
console.log("To get the nav tag with it's class name => ", navQueryWithClass);

const navQueryWithID = document.querySelector("#navbar");   
console.log("To get the nav tag with it's ID => ", navQueryWithID);
// => Since ID in HTML cannot be duplicated, we can select the elements accuratly when compared to the class or tag

/**Change the content of HTML document
 * -----------------------------------
 * => To change/manipulate a HTML element first we need to access that element. 
 * There are two types of contents 
 * -> Text content => it refers to the text inside the targeted tag.
 * -> HTML content => it refers to the whole html element that targeted. 
 */

const getDivTag = document.querySelector("#changeDiv");
getDivTag.innerHTML = `<h1>Hello, Good Evening</h1>`;   //changing the h2 tag to h1 tag
console.log("getDivTag => ", getDivTag);

const geth2Tag = document.querySelector("#changeDiv h2"); //since we changed the h2 tag to h1 tag in above example, there is no h2 tag exists. Hence it will give null.
console.log("geth2Tag => ", geth2Tag);

const geth1Tag = document.querySelector("#changeDiv h1");
geth1Tag.innerText = `How are you?`;       //changing the text inside the exisiting h1 tag. 
console.log("geth1Tag => ", geth1Tag);

