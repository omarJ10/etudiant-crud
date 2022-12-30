import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './auth/login-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { EtudComponent } from './etudiant/etud/etud.component';
import { EtudiantAddComponent } from './etudiant/etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './etudiant/etudiant-edit/etudiant-edit.component';


const routes: Routes = [
  {path :'login' ,component:LoginComponent},
  {path:'etud' ,component: EtudComponent ,canActivate: [LoginGuardService]},
  {path:'etud/add' ,component: EtudiantAddComponent,canActivate: [LoginGuardService]},
  {path:'etud/edit/:id' ,component: EtudiantEditComponent,canActivate: [LoginGuardService]},
  {path :'' ,redirectTo:'login',pathMatch:'full'}
  ];
 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
