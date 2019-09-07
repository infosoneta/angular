import { Component, OnInit } from  '@angular/core';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from  'src/app/admin/auth/auth.model2';

@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.css']
})
export  class  LoginComponent  implements  OnInit {
    constructor(public  authService:  AuthService) { }
    ngOnInit() {}
user=new User();

    onSubmit(form: NgForm) {
      if (form.value != null)
      {
      // alert(form.value.email);
        this.authService.login(form.value.email,form.value.password);
       // this.authService.login('infosonetasoft@gmail.com','sss123');
      }
      else
       // this.authService.updateEmployee(form.value);
       alert("loginfailed");
      
    }
}