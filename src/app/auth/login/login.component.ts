import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router : Router,private authService :AuthService ) {

  }
 
  verfication(f : NgForm){
    if(f.value.username==='admin' && f.value.password==='admin'){
      this.authService.login();
      this.router.navigate(['etud']);
    }else{
      this.authService.logout();
      alert("Username and Password Combination is Wrong !!!");
      this.router.navigate(['']);
    }
  }
}
