import { Component } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';

import { Router } from  "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor( public  router:  Router ,public authServe:AuthService) { 

 
    }

  onLogIn(){
    this.router.navigate(['/admin/login']);
   // alert("login")
  }
  onSignUp(){
    this.router.navigate(['/admin/register']);
  //  alert("signup")
  }
  onLogout(){
    this.authServe.SignOut();
   // alert("logout")
  }
}


