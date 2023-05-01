import * as contactService from '../../../services/contactService.js';

window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.URL.split("=")[1];
    console.log(contactId);
    contactService.deleteContact(contactId).then((response) => {
        if(response && response.data) {
            window.location.href = '/Javascript/22-JS-Axios-Contact-Manager/bootstrap/contacts-UI/contact-admin.html';
        }
    }).catch((error) => {
        console.error(error);
    })
})