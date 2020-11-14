import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './staticContacts';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor() { }

  contacts = CONTACTS;
  selectedContact : Contact;

  public getContact(id : number): Contact {
    console.log(id);
    const res = this.contacts.find(c => c.contactId == id);
    console.log(res.contactId)

    return res;
  }
}
