import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-book-app';
  viewAllContacts = false;

  onSelect(){
    this.viewAllContacts = true;
  }

  onClear(){
    this.viewAllContacts = false;
  }
}

