Since we don't know the node.js or any back end technology, we use JSON server as backend, which is a thirdparty module.

json-server
-----------
-> db.json
-> install node js
-> create a package.json -> npm init --yes
-> npm install json-server
-> configure package.json with db.json
	-> json-server --watch db.json --port 9000

NOTE :
------
to start the server -> npm install -> npm start

CRUD
----
GET -> get data from server -> axios.get()
POST -> Create data at server -> axios.post()
PUT -> update at server -> axios.put()
DELETE	-> delete at server -> axios.delete()

REST APIS
----------
1. Usage : Get all contacts
   Method : GET
   URL : http://localhost:9000/contacts
   params : No-params

2. Usage : Get a single contact
   Method : GET
   URL : http://localhost:9000/contacts/:contactId
   params : No-params

3. Usage : Create a contact
   Method : POST
   URL : http://localhost:9000/contacts/
   params : name , imageUrl, mobile, email, company, title, groupId

4. Usage : Update a contact
   Method : PUT
   URL : http://localhost:9000/contacts/:contactId
   params : name , imageUrl, mobile, email, company, title, groupId

5. Usage : Delete a contact
   Method : DELETE
   URL : http://localhost:9000/contacts/:contactId
   params : no-params

6. Usage : Get all groups
   Method : GET
   URL : http://localhost:9000/groups
   params : No-params

7. Usage : Get a group
   Method : GET
   URL : http://localhost:9000/groups/:groupId
   params : No-params

Backend API -> test -> insomnia / postman

Car -> engine ->

URL Parameters , query Strings

Modules -> hospital -> billing ,patients, doctors

www.apollo.com/billing/in-patient?receiptId=23234234