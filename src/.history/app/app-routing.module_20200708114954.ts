import { NgModule } from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SFServicesComponent } from './companyService/companyService.component';
import { SFExpertisesComponent } from './expertise/expertises.component';
import { SFExpertiseComponent } from './expertise/expertise-single/expertise.component';
import { SFHomeComponent } from './home/home.component';
import {SFContactPageComponent} from './contactPage/contactPage.component';
const routes: Routes = [
  {
     path: 'services',
     component: SFServicesComponent,
     loadChildren: './components/dashboard/service.module#ServicesModule'
  },
  { path: 'expertises/:id', component: SFExpertiseComponent },
  {
    path: 'expertises',
    component: SFExpertisesComponent
  },
  {
    path: 'contacts',
    component: SFContactPageComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'outsoursing',
    component: SFContactPageComponent
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: SFHomeComponent
  },


  { path: '**', component: SFHomeComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
