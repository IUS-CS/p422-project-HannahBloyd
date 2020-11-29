import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDirectoryComponent } from './contact-directory/contact-directory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDirectoryComponent,
    ContactDisplayComponent,
    PageNotFoundComponent,
    HomePageComponent,
    EditContactComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
