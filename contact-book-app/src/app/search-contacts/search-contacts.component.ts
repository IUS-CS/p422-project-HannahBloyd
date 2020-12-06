import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { ContactDataService } from '../contact-data.service';

@Component({
  selector: 'app-search-contacts',
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.css']
})


export class SearchContactsComponent implements OnInit {
  active = 1;
  queriedContacts : Contact[];
  queriedContactsLength;
  msg : String;
  // type = "warning";
  hasSearched = false;

  fname = new FormGroup({
    firstName: new FormControl('')
  });

  lname = new FormGroup({
    lastName : new FormControl('')
  });

  num = new FormGroup({
    phone : new FormControl('')
  });

  company = new FormGroup({
    company : new FormControl('')

  });

  constructor(
    private contactDataService: ContactDataService
  ) { }
  

  ngOnInit(): void {
  }

  public search(): void {

   let val : string;
   let type : string;
   let valid : boolean;

    switch (this.active){
      case 1:{
        //First name
        val = this.fname.get('firstName').value;
        type = "firstName";
        valid = this.fname.valid;
        break;
      }
      case 2: {
        //last name
        val = this.lname.get('lastName').value;
        type = "lastName";
        valid = this.lname.valid;
        break;
      }
      case 3: {
        //number
        val = this.num.get('phone').value;
        type = "number";
        valid = this.num.valid;
        break;
      }
      case 4: {
        //company
        val = this.company.get('company').value;
        type = "company";
        valid = this.company.valid;
        break;
      }
    }

    if (!valid){
      return;
    }

    this.contactDataService.searchContacts(type, val)
    .subscribe(
      next => {
        this.queriedContacts = next;
        this.queriedContactsLength = next.length;
      }
    );

    this.hasSearched = true;
  }

}
