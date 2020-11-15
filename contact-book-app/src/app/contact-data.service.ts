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
  private url = '/v1/contacts';

  public getContact(id : String): Observable<Contact> {
    return this.http.get<Contact>(`${this.url}/${id}`);
  }

  public getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  public saveContact(id, contact: Contact): Observable<any> {
    return this.http.post(`${this.url}/edit/${id}`, contact);
  }
}
