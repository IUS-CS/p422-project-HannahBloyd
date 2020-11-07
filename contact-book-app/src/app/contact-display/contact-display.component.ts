import { Component, Input, OnInit } from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit {

  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
