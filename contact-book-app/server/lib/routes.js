const express = require('express');
const contacts = require('./controllers/contacts');

let routes = express.Router();
routes.route('/contacts')
    .get(contacts.root);

routes.route('/contacts/:contactId')
    .get(contacts.byContactId)
    .put(contacts.saveContact)
    .post(contacts.createContact)
    .delete(contacts.deleteContact)
    


module.exports = routes;