const mongoose = require('mongoose');
const Contact = require('./lib/models/contact');


const ascott = new Contact({
    contactId : 0,
    firstName : "Alyssa",
    lastName : "Scott",
    number: "812-123-4567",
    address: "123 James St",
    email: "as@gmail.com",
    company : null
});

const ojansen = new Contact({
    contactId : 1,
        firstName : "Olivia",
        lastName : "Jansen",
        number: "812-987-6543",
        address: "450 Main St",
        email: "oj@gmail.com",
        company : "NCAA"
});

const jjacobs = new Contact({
    contactId : 2,
        firstName : "Jenny",
        lastName : "Jacobs",
        number: "812-444-5555",
        address: "4111 Adam St",
        email: "jj@gmail.com",
        company : "Audubon"
});

const dashmore = new Contact({
    contactId : 3,
        firstName : "Dylan",
        lastName: "Ashmore",
        number: "502-555-2468",
        address: "3131 Peachtree St",
        email: "da@gmail.com",
        company : null
});

//Needs changing but not sure what to
mongoose.connect('mongodb://localhost:27017/contactbook', {useNewUrlParser: true, useUnifiedTopology: true});

ascott.save().catch(err => console.error(err)).then(() => { console.log('saved ascott') });
ojansen.save().catch(err => console.error(err)).then(() => { console.log('saved ojansen') });
jjacobs.save().catch(err => console.error(err)).then(() => { console.log('saved jjacobs') });
dashmore.save().catch(err => console.error(err)).then(() => { console.log('saved dashmore') });