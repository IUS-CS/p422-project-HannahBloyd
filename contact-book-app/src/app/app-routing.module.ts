import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDirectoryComponent } from './contact-directory/contact-directory.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'contacts', component: ContactDirectoryComponent},
  {path : 'contact/:contactId', component: ContactDisplayComponent},
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
