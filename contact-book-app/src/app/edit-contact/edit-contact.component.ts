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
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public contact: Observable<Contact>;
  currentContactId : string;
  status = '';
  statusIsError = false;


  profile = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    number : new FormControl(''),
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
    const id = this.route.snapshot.params['contactId'];

    this.contact = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Contact> => {
        this.currentContactId = params.get('contactId');
        return this.contactDataService.getContact(params.get('contactId'));
      })
    );

    // this.profile = this.contact;

  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {

    if (!this.profile.valid){
      return;
    }

    const updatedContact = new Contact(
      this.currentContactId,
      this.profile.value.firstName,
      this.profile.value.lastName,
      this.profile.value.number,
      this.profile.value.address,
      this.profile.value.email,
      this.profile.value.company
    );

    this.contactDataService.saveContact(this.currentContactId, updatedContact)
      .subscribe(
        next => {
          this.status = 'Saved!';
          this.statusIsError = false;
        },
        err => {
          this.status = err;
          this.statusIsError = true;
        }
      );

    this.goBack();
  }

}
