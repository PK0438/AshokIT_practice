import * as contactService from "../../../services/contactService.js";

window.addEventListener('DOMContentLoaded', () => {
    contactService.getAllContacts().then((response) => {
        displayContacts(response.data);
        console.log(response.data)
    }).catch((error) => {
        console.error(error);
    });
});

/** EXPLANATION:
 * This is a JavaScript code snippet that uses the addEventListener() method to wait for the DOMContentLoaded event to occur, 
   and then calls the getAllContacts() method of a contactService object to fetch all contacts data.    
 * Once the data is returned successfully, it logs the data to the console using the console.log() method. 
 * If there is an error during the request, it logs the error to the console using the console.error() method.
 * Assuming that contactService is a valid object with a getAllContacts() method that returns a Promise, this code will 
   asynchronously fetch the contacts data and log it to the console once the DOM content is loaded. 
 * If there is an error during the request, it will log the error to the console instead.
 * This code is useful for fetching data from a remote server or API and displaying it on a web page. 
 * By waiting for the DOMContentLoaded event, it ensures that the page has finished loading before attempting to fetch the data, 
   which can help avoid errors or race conditions.
 */

const displayContacts = (contacts) => {
    let contactCardElement = "";
    let contactRowElement = document.querySelector('#cards-row');           //we get the row element in the html file with id querySelector and injeting the looped elements into that row. 
    for(let contact of contacts) {
        contactCardElement += `            <div class="col-sm-6 mt-3">
        <div class="card shadow-lg">
            <div class="card-body bg-light">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <img src="${contact.imageUrl}" alt="" class="img-fluid rounded-circle shadow-lg">    
                    </div>
                    <div class="col-sm-8">
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name: <span class="fw-bold"> ${contact.name} </span>
                            </li>
                            <li class="list-group-item">
                                Mobile: <span class="fw-bold"> ${contact.mobile} </span>
                            </li>
                            <li class="list-group-item">
                                Email: <span class="fw-bold"> ${contact.email} </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                        <a href="./view-contact.html?contactId=${contact.id}" class="btn btn-warning mb-1">
                            <i class="bi bi-eye"></i>
                        </a>
                        <a href="./edit-contact.html?contactId=${contact.id}" class="btn btn-primary mb-1">
                            <i class="bi bi-pencil"></i>
                        </a>
                        <a href="./delete-contact.html?contactId=${contact.id}" class="btn btn-danger mb-1">
                        <i class="bi bi-trash"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    contactRowElement.innerHTML = contactCardElement;
};