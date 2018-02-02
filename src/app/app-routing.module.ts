import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router'
import {  HeroesComponent } from './heroes/heroes.component'
import { ContactsComponent } from './contacts/contacts.component';
import { DashbardComponent } from './dashbard/dashbard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
const routes: Routes=[
  {path:'heroes', component: HeroesComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'dashboard', component: DashbardComponent},
  {path: '' , redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'detail/:id', component:HeroDetailComponent },
  {path:'contactDetail/:id',component:ContactDetailComponent}
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports:[
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { 

}
