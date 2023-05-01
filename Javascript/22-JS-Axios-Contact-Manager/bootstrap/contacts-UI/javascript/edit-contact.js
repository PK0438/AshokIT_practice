import * as contactService from '../../../services/contactService.js';

/**
 * Cheking empty fields
 */
const isEmptyFields = (contact) => {
    for(let value of Object.values(contact)) {
        if(value === "") {
            return true;
        }
    } 
    return false;
}

/**
 * Image view upon selecting the URL
 */
const imageElement = document.querySelector('#image-input');
const viewImageElement = document.querySelector("#image-view");
imageElement.addEventListener('input', (event) => {
    const imageUrl = event.target.value;
    viewImageElement.setAttribute('src', imageUrl);
})

/**
 * Pre populate the data upon selecting the contact card
 */
window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.URL.split("=")[1];
    console.log(contactId);
    contactService.getContact(contactId).then((contactResponse) => {
        console.log(contactResponse.data);
        const contact = contactResponse.data;
        if(!isEmptyFields(contact)) {
            populateFormData(contact)
        }
    }).catch((error) => {
        console.error(error);
    })
})

/**
 * Populate the existing data
 */
const populateFormData = (contact) => {
    document.querySelector('#name-input').value = contact.name;
    document.querySelector('#image-input').value = contact.imageUrl;
    document.querySelector('#mobile-input').value = contact.mobile;
    document.querySelector('#email-input').value = contact.email;
    document.querySelector('#company-input').value = contact.company;
    document.querySelector('#title-input').value = contact.title;
    document.querySelector('#group-input').value = contact.groupId;
    document.querySelector('#image-view').setAttribute('src', contact.imageUrl);
}

/** Form submit logic */
const contactFormElement = document.querySelector('#add-contact-form');
contactFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const contact = {
        name: document.querySelector('#name-input').value,
        imageUrl: document.querySelector('#image-input').value,
        mobile: document.querySelector('#mobile-input').value,
        email: document.querySelector('#email-input').value,
        company: document.querySelector('#company-input').value,
        title: document.querySelector('#title-input').value,
        groupId: document.querySelector('#group-input').value,
    };

    if(Object.keys(contact).length > 0 && !isEmptyFields(contact)) {
        const contactId = document.URL.split("=")[1];
        contactService.updateContact(contact, contactId).then((response) => {
            if(response.data) {
                //success
                window.location.href = "/Javascript/22-JS-Axios-Contact-Manager/bootstrap/contacts-UI/contact-admin.html";
            }
        }).catch((error) => {
            console.error(error);
        });
    }

})

