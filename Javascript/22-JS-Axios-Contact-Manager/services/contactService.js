const serverUrl = "http://localhost:9000";

/**
 * 1. Usage : Get all contacts
 *    Method : GET
 *    URL : http://localhost:9000/contacts
 *    params : No-params
 * @returns {*}
 */
export const getAllContacts = () => {
    const dataUrl = `${serverUrl}/contacts`;
    return axios.get(dataUrl);
};

/**
 * 2. Usage : Get a single contact
 *    Method : GET
 *    URL : http://localhost:9000/contacts/:contactId
 *    params : No-params
 */
export const getContact = (contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
};

/**
 * 3. Usage : Create a contact
 *    Method : POST
 *    URL : http://localhost:9000/contacts/
 *    params : name , imageUrl, mobile, email, company, title, groupId
 */
export const createContact = (contact) => {
    const dataUrl = `${serverUrl}/contacts/`;
    return axios.post(dataUrl, contact);
};

/**
 * 4. Usage : Update a contact
 *    Method : PUT
 *    URL : http://localhost:9000/contacts/:contactId
 *    params : name , imageUrl, mobile, email, company, title, groupId
 */
export const updateContact = (contact, contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
};

/**
 * 5. Usage : Delete a contact
 *    Method : DELETE
 *    URL : http://localhost:9000/contacts/:contactId
 *    params : no-params
 */
export const deleteContact = (contactId) => {
    const dataUrl = `${serverUrl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
};

/**
 * 6. Usage : Get all groups
 *    Method : GET
 *    URL : http://localhost:9000/groups
 *    params : No-params
 */
export const getAllGroups = () => {
    const dataUrl = `${serverUrl}/groups`;
    return axios.get(dataUrl);
};

/**
 * 7. Usage : Get a group
 *    Method : GET
 *    URL : http://localhost:9000/groups/:groupId
 *    params : No-params
 * 
 *  Explanation:
 * The function first extracts the groupId property from the contact object using destructuring assignment. 
 * It then constructs a URL using the serverUrl constant and the groupId value, and assigns the resulting string to the dataUrl constant.
 * Finally, the function returns a Promise object generated by calling the axios.get() method with the dataUrl parameter. 
 * The axios.get() method is a part of the Axios library and is used to make an HTTP GET request to the specified URL, and it returns 
   a Promise that resolves with the response data.
 * Overall, this code is used to retrieve group data from a remote server or API based on the groupId property of a given contact object. 
 * The axios library is a popular choice for making HTTP requests in JavaScript, and this code takes advantage of its get() method 
   to make the HTTP request and return a Promise object.
 */
export const getGroup = (contact) => {
    const {groupId} = contact;
    const dataUrl = `${serverUrl}/groups/${groupId}`;
    return axios.get(dataUrl);
};









