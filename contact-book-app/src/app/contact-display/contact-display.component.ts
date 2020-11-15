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
  constructor(
    private contactDataService: ContactDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['contactId'];

    this.contact = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Contact> => {
        return this.contactDataService.getContact(params.get('contactId'));
      })
    );

    }

    public selectContact(id: Number): void {
      console.log("Selected contact in contact display " + id);
      this.contact = this.contactDataService.getContact(name);
      if (!this.contact) {
        this.router.navigateByUrl('/notfound');
      }
    }

    public goBack(): void {
      this.location.back();
    }

}
