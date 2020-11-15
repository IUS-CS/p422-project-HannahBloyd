const mongoose = require('mongoose');
const Contact = require('./lib/models/contact');


const ascott = new Contact({
    contactId : "ascott",
    firstName : "Alyssa",
    lastName : "Scott",
    number: "812-123-4567",
    address: "123 James St",
    email: "as@gmail.com",
    company : null
});

const ojansen = new Contact({
    contactId : "ojansen",
    firstName : "Olivia",
    lastName : "Jansen",
    number: "812-987-6543",
    address: "450 Main St",
    email: "oj@gmail.com",
    company : "NCAA"
});

const jjacobs = new Contact({
    contactId : "jjacobs",
    firstName : "Jenny",
    lastName : "Jacobs",
    number: "812-444-5555",
    address: "4111 Adam St",
    email: "jj@gmail.com",
    company : "Audubon"
});

const dashmore = new Contact({
    contactId : "dashmoer",
    firstName : "Dylan",
    lastName: "Ashmore",
    number: "502-555-2468",
    address: "3131 Peachtree St",
    email: "da@gmail.com",
    company : null
});

const drhodes = new Contact({
    contactId : "drhodes",
    firstName : "Destiny",
    lastName: "Rhodes",
    number: "502-111-2233",
    address: "14 Maple St",
    email: "dr@gmail.com",
    company : null
});

const monty = new Contact({
    contactId : "monty",
    firstName : "Caitlin",
    lastName: "Henderson",
    number: "502-111-2234",
    address: "16 Maple St",
    email: "ch@gmail.com",
    company : null
});


//Needs changing but not sure what to
mongoose.connect('mongodb://localhost:27017/contactbook', {useNewUrlParser: true, useUnifiedTopology: true});


async function save(){

    await Contact.deleteMany();

    await ascott.save().catch(err => console.error(err)).then(() => { console.log('saved ascott') });
    await ojansen.save().catch(err => console.error(err)).then(() => { console.log('saved ojansen') });
    await jjacobs.save().catch(err => console.error(err)).then(() => { console.log('saved jjacobs') });
    await dashmore.save().catch(err => console.error(err)).then(() => { console.log('saved dashmore') });
    await drhodes.save().catch(err => console.error(err)).then(() => { console.log('saved drhodes') });
    await monty.save().catch(err => console.error(err)).then(() => { console.log('saved monty') });

}

save().then(() => console.log('done saving'));