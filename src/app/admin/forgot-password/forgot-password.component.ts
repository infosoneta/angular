import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }


  forgotpassword(email: string) {
    if (email != null)
    {
    // alert(form.value.email);
      this.authService.ForgotPassword(email)
     // this.authService.login('infosonetasoft@gmail.com','sss123');
    }
    else
     // this.authService.updateEmployee(form.value);
     alert("loginfailed");
    
  }
}
