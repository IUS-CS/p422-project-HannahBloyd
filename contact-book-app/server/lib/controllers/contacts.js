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
          ret.push(contact);
        }
        res.json(ret);
      })
    },
    byContactId: (req, res) => {
        const id = req.params.contactId;

        Contact.findOne().byId(id).exec((err, contact) => {
        if (err) {
            res.status(500);
            res.json(err);
            return;
        }
        if (!contact) {
            console.log("No contact found");
            res.status(404);
            res.json({'err': 'contact not found'});
            return;
        }
        res.json(contact);
        })
    },
    saveContact: (req, res) => {
      console.log(req.body);
      const sub = new Contact(req.body);
    sub.save()
      .then(() => {
        res.json({status: 'success'})
      })
      .catch(err => {
        res.status(400);
        res.json(err);
      });
    }
}