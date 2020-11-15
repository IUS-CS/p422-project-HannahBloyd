import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Contact } from './contact';
import { CONTACTS } from './staticContacts';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(
    private http: HttpClient
  ) { }

  contacts = CONTACTS;
  selectedContact : Contact;
  private url = '/v1/contact';

  public getContact(id : String): Observable<Contact> {
    return this.http.get<Contact>(`${this.url}/${id}`);
  }

  public getContactNames(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
