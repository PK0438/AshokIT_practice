import * as contactService from "../../../services/contactService.js";

/**Image view logic upon entering the URL in the form */

const imageElement = document.querySelector('#image-input');
const viewImageElement = document.querySelector("#image-view");
imageElement.addEventListener('input', (event) => {
    const imageUrl = event.target.value;
    viewImageElement.setAttribute('src', imageUrl);
})

const isEmptyFields = (contact) => {
    for(let value of Object.values(contact)) {
        if(value === "") {
            return true;
        }
    }
    return false;
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
        contactService.createContact(contact).then((response) => {
            if(response.data) {
                //success
                window.location.href = "/Javascript/22-JS-Axios-Contact-Manager/bootstrap/contacts-UI/contact-admin.html";
            }
        }).catch((error) => {
            console.error(error);
        });
    }

})