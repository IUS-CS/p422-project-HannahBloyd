import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDirectoryComponent } from './contact-directory/contact-directory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactDisplayComponent } from './contact-display/contact-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDirectoryComponent,
    ContactDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
