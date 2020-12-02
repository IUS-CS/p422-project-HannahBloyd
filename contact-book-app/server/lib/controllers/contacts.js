const Contact = require('../models/contact');
module.exports = {
  root: (req, res) => {
    Contact.aggregate(
      [
        { $sort : { lastName : 1 } }
      ]
   ).exec((err, contacts) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(contacts);
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
        res.json({ 'err': 'contact not found' });
        return;
      }
      res.json(contact);
    })
  },
  saveContact: function (req, res) {
    let body = req.body;
    let id = req.params.contactId;
    
   Contact.updateOne({contactId: id}, body).exec()
   .then(() => {
    res.json({ status: 'success' })
  })
  .catch(err => {
    res.status(400);
    res.json(err);
  });
  },
  createContact: function (req, res) {
    console.log(req.body);
    const sub = new Contact(req.body);
    sub.save()
      .then(() => {
        res.json({ status: 'success' })
      })
      .catch(err => {
        res.status(400);
        res.json(err);
      });
  },
  deleteContact: function (req, res) {
    let id = req.params.contactId;

    Contact.findOne().byId(id).exec((err, doc) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      doc.delete()
        .then(() => { res.sendStatus(204) })
        .catch((err) => {
          res.status(500);
          res.json(err);
        })
    })
  }
};