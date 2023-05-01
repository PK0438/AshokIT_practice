import * as contactService from '../../../services/contactService.js';

window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.URL.split('=')[1];
    contactService.getContact(contactId).then((contactResponse) => {
         const contact = contactResponse.data;
         console.log(contact);
        contactService.getGroup(contact).then((groupResponse) => {
            console.log(groupResponse.data);
            const group = groupResponse.data;
            viewContact(contact, group);
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.error(error)
    });

})


const viewContact = (contact, group) => {
    const viewContactRowEle = document.querySelector('#view-card');
    let viewCard = `<div class="col-sm-3">
    <img src="${contact.imageUrl}" alt="" class="img-fluid rounded-circle shadow-lg">    
</div>
<div class="col-sm-6">
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
        <li class="list-group-item">
            Company: <span class="fw-bold"> ${contact.company} </span>
        </li>
        <li class="list-group-item">
            Title: <span class="fw-bold"> ${contact.title} </span>
        </li>
        <li class="list-group-item">
            Group: <span class="fw-bold"> ${group.name} </span>
        </li>
    </ul>
    <a href="./contact-admin.html" class="btn btn-warning mt-3 text-white">
        <i class="bi bi-arrow-left-circle-fill"></i> Back
    </a>
</div>`;
    viewContactRowEle.innerHTML = viewCard;
}

