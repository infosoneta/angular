import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { NavServices } from  'src/app/components/nav-services';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( public  router:  Router ,
    public authServe:AuthService,
    public nav:NavServices,
  ) { 

 
  }

  ngOnInit() {
    this.nav.visible=false;
    
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
