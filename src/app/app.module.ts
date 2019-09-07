import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
//import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { PhoneLoginComponent } from './admin/phone-login/phone-login.component';
import { WindowService } from 'src/app/admin/phone-login/window.service';
import { AuthService } from  './admin/auth/auth.service';
import { NavServices } from  './components/nav-services';
import { IndexComponent } from './admin/dashboard/index/index.component';
import { EmployeeService } from './employees/shared/employee.service';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { MusicComponent } from './media/music/music.component';
import { ManageMediaComponent } from './media/manage-media/manage-media.component';

import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageService } from 'src/app/shared/image.service';
import { MediaService } from 'src/app/media/shared/media.service';
import { CheckOutComponent } from './support/check-out/check-out.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { NewsComponent } from './news/news/news.component';
import { MediaListComponent } from './media/media-list/media-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    PhoneLoginComponent,
    IndexComponent,
    EmployeeComponent,
    EmployeeListComponent,
    FooterComponent,
    HeaderComponent,
    HeaderHomeComponent,
    MusicComponent,
    ManageMediaComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    ManageMediaComponent,
    CheckOutComponent,
    PaymentComponent,
    NewsComponent,
    MediaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     FormsModule,ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
     HttpClientModule
     //,NgxPaginationModule
  ],
  providers: [AngularFireDatabase,AngularFireStorage,AuthService,EmployeeService,
    NavServices,ImageService,MediaService
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
