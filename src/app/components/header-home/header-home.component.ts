import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  constructor( public router:Router, 
    public authservice:AuthService){ }

  ngOnInit() {
  }

onSignUp(){
    this.router.navigate(['/admin/register']);
  //  alert("signup")
  }
  onLogout(){

    this.authservice.SignOut();
   // alert("logout")
  }
}
