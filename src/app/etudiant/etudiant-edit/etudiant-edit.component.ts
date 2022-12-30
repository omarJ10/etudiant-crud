import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
  studentToEdit : Student = new Student();

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : StudentService,
    private router : Router) { }

  editStud(f: NgForm){
    this.service.editStudent(this.studentToEdit).subscribe(res=>{
      this.service.getAll();
      this.router.navigate(["/etud"]);
    },err=>{
      alert("Failed to update student");
    });

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params['id']);
        this.service.getAll();
        this.studentToEdit = this.service.getStudById(+params['id']);
      });
  }

}
