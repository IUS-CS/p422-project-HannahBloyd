const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    contactId : {type: Number, required :true, unique : true},
    firstName : {type: String, required :true},
    lastName : String,
    number: String,
    address: String,
    email: String,
    company: String
});

ContactSchema.query.byContactId = function(id) {
    return this.where({contactId: id});
  }

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;