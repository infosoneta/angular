import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from  'src/app/admin/auth/auth.model2';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public  authService:  AuthService) { }

  ngOnInit() {
  }

}
