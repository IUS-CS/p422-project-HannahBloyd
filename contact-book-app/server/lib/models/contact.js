const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    contactId : {type: String, required :true, unique : true},
    firstName : {type: String, required :true},
    lastName : String,
    number: String,
    address: String,
    email: String,
    company: String
});

ContactSchema.query.byId = function(id) {
    return this.where({contactId: id});
  }

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;