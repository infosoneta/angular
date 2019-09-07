import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from  'src/app/admin/auth/auth.model2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public  authService:  AuthService) { }

  ngOnInit() {
  }

  

}
