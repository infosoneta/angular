import { Injectable, NgZone } from '@angular/core';

import { Router } from  "@angular/router";
import { auth } from  'firebase/app';

//import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

//import { Firebase } from  'firebase';
import { AngularFireAuth } from  "@angular/fire/auth";
//import { User } from  'firebase';
import { User } from  './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any// Save logged in user data

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router, 
    public afs: AngularFirestore,   // Inject Firestore service
    public ngZone: NgZone) { 

     /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


 // Sign in with faceBook
 FaceBookAuth() {
  return this.AuthLogin(new auth.FacebookAuthProvider());
  }
 
  

 // Sign in with Google
 TwitterAuth() {
  return this.AuthLogin(new auth.TwitterAuthProvider());
  }


  // Sign in with Google
GoogleAuth() {
  return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
  .then((result) => {
  this.ngZone.run(() => {

   // var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  alert(result.user.email);
  this.router.navigate(['admin/register']);
  })
  this.SetUserData(result.user);
  }).catch((error) => {
  window.alert(error)
  })
  }
  
/* Setting up user data when sign in with username/password, 
sign up with username/password and sign in with social auth  
provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
SetUserData(user) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const userData: User = {
  uid: user.uid,
  //password:user.password,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  emailVerified: user.emailVerified
  }
  return userRef.set(userData, {
  merge: true
  })
  }
      
// Sign in with email/password
login(email: string, password: string) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  .then((result) => {
  this.ngZone.run(() => {
    //  alert("successfuly logged in !");
  this.router.navigate(['admin/dashboard/index']);
  });
  this.SetUserData(result.user);
  }).catch((error) => {
  window.alert(error.message)
  })
  }
  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

 // Send email verfificaiton when new user sign up
SendVerificationMail() {
return this.afAuth.auth.currentUser.sendEmailVerification()
.then(() => {
this.router.navigate(['admin/verify-email']);
})
}
// Reset Forggot password
ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
.then(() => {
window.alert('Password reset email sent, check your inbox.');
}).catch((error) => {
  window.alert(error)
})
}
// Returns true when user is looged in and email is verified
get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
}


PhoneAuth(){
  this.router.navigate(['admin/phone-login']);
}
 // Sign out 
 SignOut() {
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  })
}
  
  
}
