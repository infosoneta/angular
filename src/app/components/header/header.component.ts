import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = ' Guest !';
  constructor( public  router:  Router ,public authServe:AuthService) { 
  }
  ngOnInit() {
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
