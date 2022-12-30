import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudComponent } from './etud/etud.component';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';



@NgModule({
  declarations: [
    EtudComponent,
    EtudiantAddComponent,
    EtudiantEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    EtudComponent,
    EtudiantAddComponent
  ]
})
export class EtudiantModule { }
