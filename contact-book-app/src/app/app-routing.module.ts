import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDirectoryComponent } from './contact-directory/contact-directory.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';

const routes: Routes = [
  {path : 'contacts', component: ContactDirectoryComponent},
  {path : 'contact/:firstName/:lastName', component: ContactDisplayComponent},
  { path: '',
		redirectTo: '/contacts', 
		pathMatch: 'full'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
