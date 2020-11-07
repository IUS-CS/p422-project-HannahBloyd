import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../staticContacts';


@Component({
  selector: 'app-contact-directory',
  templateUrl: './contact-directory.component.html',
  styleUrls: ['./contact-directory.component.css']
})
export class ContactDirectoryComponent implements OnInit {
  allContacts = CONTACTS;
  selectedContact : Contact;

  constructor() { }

  ngOnInit(): void {
  }

  contactSelected(contact){
    this.selectedContact = contact;
  }

}
