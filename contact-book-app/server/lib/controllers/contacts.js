const Contact = require('../models/contact');
module.exports = {
    root: (req, res) => {
      Contact.find().exec((err, contacts) => {
        if (err) {
          res.status(500);
          res.json(err);
          return;
        }
        let ret = [];
        for (let contact of contacts) {
          ret.push(contact.id);
        }
        res.json(ret);
      })
    },
    byContactId: (req, res) => {
        const id = req.params.contactId;

        Contact.findOne().byContactId(id).exec((err, contact) => {
        if (err) {
            res.status(500);
            res.json(err);
            return;
        }
        if (!contact) {
            res.status(404);
            res.json({'err': 'contact not found'});
            return;
        }
        console.log('sending contact: ' + contact)
        res.json(contact);
        })
    }
}