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
    const res = this.contacts.find(c => c.contactId == id);

    return res;
  }
}
