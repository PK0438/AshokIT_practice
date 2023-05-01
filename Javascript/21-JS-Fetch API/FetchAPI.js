/**
 * AJAX -> Asynchronus Javascript and XML 
 *  => used to fetch and read the data from the server.
 *  => XML is outdated, inplace we have JSON as a new one. Yet the name hasn't changed.
 *  => We have 3 ways to fetch the data drom the server. 
 *      1. XMLhttps request (Outdated)
 *      2. fetch API (in-built in browser)
 *      3. Axios API (third party)
 */

/**
 * Fetch API   using jsonplaceholder. 
 * https://jsonplaceholder.typicode.com/users
 */

// const serverUrl = "https://jsonplaceholder.typicode.com";

// const getAllUsersFromServer = () => {
//     const dataUrl = `${serverUrl}/users`;
//     fetch(dataUrl).then(response => response.json()).then(json => console.log(json))
// }

// getAllUsersFromServer();

/**
 * The first line of code initiates the Fetch API by calling the fetch() function and passing in the URL as a parameter. 
 * The fetch() function returns a Promise that resolves to a Response object representing the response to the request.
 * The second line of code extracts the JSON data from the Response object by calling the json() method, 
        which also returns a Promise that resolves to a JavaScript object representing the JSON data.
 * The third line of code logs the JavaScript object to the console using the console.log() method.
 * Overall, this code retrieves a JSON object from a server and logs it to the console.
 */


    //Will use the data table in 15-JS-DOM-Example-5 to represent the data in the UI

        const serverUrl = "https://jsonplaceholder.typicode.com";

        const getAllUsersFromServer = () => {
          return new Promise((resolve, reject) => {
            const dataUrl = `${serverUrl}/users`;
            fetch(dataUrl)
              .then((response) => response.json())
              .then((json) => {
                if (json) {
                  resolve(json);
                } else {
                  reject("Server is not responding");
                }
              });
          });
        };

        const displayTableData = (users) => {
            const tableBodyElement = document.querySelector("#table-body");
            let tableRowsElement = "";
            for (let user of users) {
                tableRowsElement += `<tr>
                                        <td>${user.id}</td>
                                        <td>${user.name}</td>
                                        <td>${user.email}</td>
                                        <td>${user.website}</td>
                                        <td>${user.address.street}</td>
                                        <td>${user.address.city}</td>
                                    </tr>`;
            }
            tableBodyElement.innerHTML = tableRowsElement;
        }

        window.addEventListener('DOMContentLoaded', () => {
            getAllUsersFromServer()
            .then((response) => {
              const userList = response;            //users data from the server
              displayTableData(userList);
            })
            .catch((error) => {
              console.error(error);
            });
        })



        //EXPLANATION
        /**
         * This code defines three functions and an event listener that fetches and displays data from a server.
         * The getAllUsersFromServer function sends a GET request to the server using the Fetch API and returns a promise. 
         * If the response from the server is successful, the response is converted to JSON format and resolved with the JSON data. 
         * If the response is unsuccessful or empty, the promise is rejected with an error message.
         * The displayTableData function receives the JSON data from the server as an argument and creates a table row element for each user. 
         * The table row element is then appended to the table body element in the HTML document.
         * Finally, the DOMContentLoaded event listener waits for the HTML document to load and then calls the getAllUsersFromServer function. 
         * When the promise is resolved, the returned JSON data is passed to the displayTableData function, which generates a table with user information. 
         * If the promise is rejected, an error message is logged to the console.
         */