import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactDataService } from '../contact-data.service';
import { CONTACTS } from '../staticContacts';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-directory',
  templateUrl: './contact-directory.component.html',
  styleUrls: ['./contact-directory.component.css']
})
export class ContactDirectoryComponent implements OnInit {
  allContacts = CONTACTS;
  // selectedContact : Contact;
  contact: Observable<Contact>;
  contactNames: Observable<string[]>;

  constructor(
    private contactDataService: ContactDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    // this.contactNames = this.contactDataService.getContactNames();
  }


  public selectContact(id: String): void {
    console.log("Selected contact in contact directory " + id);
    this.contact = this.contactDataService.getContact(name);
    if (!this.contact) {
      this.router.navigateByUrl('/notfound');
    }
  }

}
