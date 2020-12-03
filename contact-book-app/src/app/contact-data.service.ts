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
    console.log(contact);
    console.log("id in service " + id);
    return this.http.put(`${this.url}/${id}`, contact);
  }

  public createContact(id, contact: Contact): Observable<any>{
    return this.http.post(`${this.url}/${id}`, contact);
  }

  public deleteContact(id): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  public searchContacts(field, value) : Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.url}/search/${field}/${value}`);
  }
}
