import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Contact} from "../contact";
import { ContactDataService } from '../contact-data.service';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit {
  public contact: Observable<Contact>;
  currentContactId : String;
  status = '';
  statusIsError = false;

  constructor(
    private contactDataService: ContactDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.currentContactId = this.route.snapshot.params['contactId'];

    this.contact = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Contact> => {
        return this.contactDataService.getContact(params.get('contactId'));
      })
    );

    }

    public goBack(): void {
      this.location.back();
    }

    public delete() : void {
      this.contactDataService.deleteContact(this.currentContactId)
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

      console.log(this.statusIsError);
      this.goBack();
    }

}
