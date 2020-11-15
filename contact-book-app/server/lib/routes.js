const express = require('express');
const contacts = require('./controllers/contacts');

let routes = express.Router();
routes.route('/contacts')
    .get(contacts.root);

routes.route('/contact/:contactId')
    .get(contacts.byContactId);


module.exports = routes;