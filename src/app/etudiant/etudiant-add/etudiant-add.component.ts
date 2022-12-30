import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit{
  constructor
  (
    private service : StudentService,
    private router : Router
  ) { }
  addStudent(f : NgForm){
    const newStudent = new Student(this.service.getNextId(), f.value.nom, f.value.prenom, f.value.classe);
    this.service.addStudent(newStudent).subscribe(res=>{
      this.service.getAll();
      this.router.navigate(["/etud"]);
    },err=>{
      alert(err);
    });
  }
  ngOnInit(): void {
  }

}
