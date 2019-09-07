import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [];
import { AppComponent } from './app.component';

//import { EmployeeComponent } from './employees/employee/employee.component';
import { LoginComponent } from './admin/login/login.component';
  import { RegisterComponent } from './admin/register/register.component';
  import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
  import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
  import { PhoneLoginComponent } from './admin/phone-login/phone-login.component';
  import { IndexComponent } from './admin/dashboard/index/index.component';
  import { EmployeeComponent } from './employees/employee/employee.component';
  import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
  import { MusicComponent } from './media/music/music.component';
  import { PaymentComponent } from './payment/payment/payment.component';
  import { NewsComponent } from './news/news/news.component';
  
  //Import canActivate guard services
  import { AuthGuard } from "./guard/auth.guard.service";
  //import { SecureInnerPagesGuard } from "./guard/secure-inner-pages.guard.service";
  import { ManageMediaComponent } from './media/manage-media/manage-media.component';
  import { MediaListComponent } from './media/media-list/media-list.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';

  // Include route guard in routes array
  const  routes:  Routes  = [
        {path:'',redirectTo:'media/music',pathMatch:'full'},
        { path:  'admin/phone-login',component:  PhoneLoginComponent ,pathMatch:'full'},
        { path:  'admin/login',component:  LoginComponent },
        { path:  'admin/register', component:  RegisterComponent ,pathMatch:'full'},
        { path:  'admin/forgot-password', component:  ForgotPasswordComponent ,pathMatch:'full'},
        { path:  'admin/verify-email', component:  VerifyEmailComponent ,pathMatch:'full'},
        { path:  'admin/dashboard/index', component:  IndexComponent ,pathMatch:'full'},
        { path:  'employees/employee', component:  EmployeeComponent ,pathMatch:'full'},
        { path:  'employees/employee-list', component:  EmployeeListComponent ,pathMatch:'full'},
        { path:  'media/music', component:  MusicComponent ,pathMatch:'full'},
        { path:  'media/manage-media', component:  ManageMediaComponent ,pathMatch:'full'},
        { path:  'payment/payment', component:  PaymentComponent ,pathMatch:'full'},
        { path:  'news/news', component:  NewsComponent ,pathMatch:'full'},
     { path:  'media/media-list', component:  MediaListComponent ,pathMatch:'full'},
       // { path: 'image', component: ImagesComponent, children: [
          { path: 'image/upload', component: ImageComponent },
          { path: 'image/list', component: ImageListComponent }
       // ]
      
       // { path:  'employees/employee', component:  EmployeeComponent ,canActivate:[AuthGuard]},
      //  { path:  'employees/employee-list', component:  EmployeeListComponent ,canActivate:[AuthGuard]}
  
     ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
