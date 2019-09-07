import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from  'src/app/admin/auth/auth.service';
import { WindowService } from 'src/app/admin/phone-login/window.service';
//import { PhoneNumber } from 'src/app/admin/phone-login/PhoneNumber';
import { environment } from 'src/app/../environments/environment';

interface User {
  uid: string;
  email: string;
}

export class PhoneNumber {
  country: string = "91";
  phone_number: string = "";
  get e164() {
    const num = this.country + this.phone_number
    return `+${num}`
  }
}


@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css'],
  providers: [ WindowService]
})


export class PhoneLoginComponent implements OnInit {
  grecaptcha: any;
  windowRef: any;
  phoneNumber = new PhoneNumber()
  verificationCode: string;
  private social_user:any;
  captchaflag=true;
    
  constructor(  private router: Router, private win: WindowService,
    public auth_service: AuthService) { }
  ngOnInit() {
      this.windowRef = this.win.nativeWindow
    // firebase.initializeApp(environment.firebaseConfig )
     
      this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
     this.windowRef.recaptchaVerifier.render()
     .then( widgetId => {

      this.windowRef.recaptchaWidgetId = widgetId
});

}

  CancelPhoneAuth(){
    this.router.navigate(['admin/login']);
  }
 // sendLoginCode(appVerifier,num) {
  sendLoginCode() {
  const appVerifier = this.windowRef.recaptchaVerifier;
  this.captchaflag=false;
  const num = this.phoneNumber.e164;
//alert(num);
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
                 // confirmationResult can resolve with the whitelisted testVerificationCode above.
     
            })
            .catch( error =>
                  // this.snackBar.open(error, 'CLOSE',
                   {
                       //   duration: 3500
                       alert('error:'+error);
                   })
           
  }
  verifyLoginCode() {
    this.captchaflag=false;
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                 
                    alert('Successfully authenticated');
                    this.auth_service.SetUserData(result.user);
                   // if(this.auth_service.isLoggedIn == true) {
                      this.router.navigate(['/admin/dashboard/index'])
                   // }
                      
                    })
                
                   .catch( error =>
                        {
                         alert('error:'+error);
                      });
            
  }
sent=false;
sendLoginCode3() {
    const appVerifier = this.windowRef.recaptchaVerifier;
  //  const phoneNumberString = formData.phone_number.toString();
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then((confirmationResult) => {
        this.sent = true;
        const verification = prompt('Enter verification code');
        if (verification != null) {
        //  console.log(verification);
          alert('error:'+verification);
          confirmationResult.confirm(verification)
            .then((good) => {
              // all checks out
            })
            .catch((bad) => {
              // code verification was bad.
              alert('error:'+bad);
            });
        } else {
          console.log('No verification code entered');
        }
      })
      .catch((err) => {
        console.log('sms not sent', err);
      });
  };

}





    //sendLoginCode();
    //  this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha',
    //    {
    //     'size': 'visible',
    //     'callback': function(response) {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //      this.sendLoginCode();
    //     },
    //     'expired-callback': function() {
    //       // Reset reCAPTCHA?
    //       window['phoneRecaptchaVerifier'].render().then(function(widgetId) {
    //         grecaptcha.reset(widgetId);
    //       });
    //     }
    //   });

      // Turn off phone auth app verification.
// firebase.auth().settings.appVerificationDisabledForTesting = true;

// var phoneNumber = "+919818194052";
// var testVerificationCode = "196712";

// // This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
// // This will resolve after rendering without app verification.
// var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

//this.sendLoginCode(appVerifier,phoneNumber);

 //);


            // firebase.auth().signInWithPhoneNumber(num,     window['phoneRecaptchaVerifier'])
            // .then(function(confirmationResult){
            //   var code = prompt('We have send a code to ' + num + ', please enter it here', "");
            //   if (code) {
            //     confirmationResult.confirm(code).then(function (result) {
            //       // User signed in successfully.
            //       // Reset reCAPTCHA?
            //       // ...
            //     }).catch(function (error) {
            //       // User couldn't sign in (bad verification code?)
            //       // Reset reCAPTCHA?
            //       window['phoneRecaptchaVerifier'].render().then(function(widgetId) {
            //         grecaptcha.reset(widgetId);
            //       });
            //     });
            //   }
            // }).catch(function(error){
            //   console.log(error.message);
            // });
