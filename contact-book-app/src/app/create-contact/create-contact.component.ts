import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Contact} from "../contact";
import { ContactDataService } from '../contact-data.service';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  public contact: Observable<Contact>;
  currentContactId : string;
  status = '';
  statusIsError = false;


  profile = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl('', Validators.email),
    company : new FormControl('')
  });

  constructor(
    private contactDataService: ContactDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location, 
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {

    if (!this.profile.valid){
      return;
    }

    const updatedContact = new Contact(
      this.profile.value.firstName + this.profile.value.lastName,
      this.profile.value.firstName,
      this.profile.value.lastName,
      this.profile.value.phone,
      this.profile.value.address,
      this.profile.value.email,
      this.profile.value.company
    );

    this.contactDataService.createContact(this.currentContactId, updatedContact)
      .subscribe(
        next => {
          this.status = 'Created!';
          this.statusIsError = false;
        },
        err => {
          this.status = err;
          this.statusIsError = true;
        }
      );

      console.log(this.statusIsError);

      this.goBack();
  }

}
