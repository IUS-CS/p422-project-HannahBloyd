const express = require('express');
const contacts = require('./controllers/contacts');

let routes = express.Router();
routes.route('/contacts')
    .get(contacts.root);

routes.route('/contacts/:contactId')
    .get(contacts.byContactId);

routes.route('/contacts/edit/:contactId')
    .post(contacts.saveContact);


module.exports = routes;