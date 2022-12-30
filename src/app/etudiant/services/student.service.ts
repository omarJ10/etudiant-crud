import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private listStudent = [
    new Student(1, "omar", "jalled", "L2DSI1"),
    new Student(2, "farah", "nabli", "L2DSI2"),
    new Student(3, "aymen", "ben said", "L2DSI2")
  ]
  listStudentChanged = new Subject <Student[]>()
  apiUrl = "http://localhost:3000/data";

  constructor(
    private http:HttpClient

  ) {this.apiUrl ="http://localhost:3000/data" }

  getAll(): Observable <Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  addStudent(stud : Student):Observable <Student>{
    return this.http.post<Student>(this.apiUrl,stud);
  }

  editStudent(stud : Student):Observable <Student>{
    return this.http.put<Student>(this.apiUrl+'/'+stud.id,stud);
  }
  

  deleteStudent(stud : Student):Observable <Student>{
    return this.http.delete<Student>(this.apiUrl+'/'+stud.id);
  }

  // getStudent() : Student[]{
  //   return [...this.listStudent];
  // }

  getStudById(id : number) : Student{
    return this.listStudent.find(
      Student => Student.id === id
    ) || new Student();
  }

  getNextId(){
    return this.listStudent[this.listStudent.length-1].id+1;
  }



  // editStud(stud : Student){
  //   this.listStudent = this.listStudent.map(
  //     s => {
  //       if (s.id === stud.id)
  //         return stud;
  //       else
  //         return s;
  //     }
  //   )
  // }

  // deleteStudent(id : number){
  //   this.listStudent = this.listStudent.filter(s => s.id !== id);
  //   // console.log(this.listBooks);
  //   this.listStudentChanged.next(this.listStudent);// ye3lem eli houa clique ya3mel bulle
  // }

}

