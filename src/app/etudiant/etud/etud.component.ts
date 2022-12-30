import { Component, OnChanges, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-etud',
  templateUrl: './etud.component.html',
  styleUrls: ['./etud.component.css']
})
export class EtudComponent implements OnInit{
  listStudent : Student[] = [];
  studentObj :Student = new Student();

  constructor(private router:Router, private studService : StudentService,private authService:AuthService) { }
  deleteStudent(s:Student){
    this.studService.deleteStudent(s).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert("Failed to delete student");
    });
  }

  ngOnInit(): void {
    this.studentObj = new Student();
    this.listStudent = [];
    this.getAllStuduent();
    
  }

  getAllStuduent(){
    this.studService.getAll().subscribe(res=>{
      this.listStudent= res;
    },err=>{
      alert("Unable to get list of Student");
    })
  }

  logOut(){
    this.authService.logout();
  }

}

