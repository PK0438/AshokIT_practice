import * as UserService from "./UserService.js";

const tableBodyElement = document.querySelector("#table-body");
window.addEventListener('DOMContentLoaded', () => {
    const users = UserService.getAllUsers();
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
})