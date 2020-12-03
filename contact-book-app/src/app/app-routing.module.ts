import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDirectoryComponent } from './contact-directory/contact-directory.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchContactsComponent} from './search-contacts/search-contacts.component';

const routes: Routes = [
  {path : 'contacts', component: ContactDirectoryComponent},
  {path : 'contact/display/:contactId', component: ContactDisplayComponent},
  {path : 'contact/edit/:contactId', component: EditContactComponent},
  {path : 'contact/create', component : CreateContactComponent},
  {path : 'contact/search', component : SearchContactsComponent},
  {path : 'home', component: HomePageComponent},
  { path: '',
		redirectTo: '/home', 
		pathMatch: 'full'
  },
  {path : 'notfound', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
