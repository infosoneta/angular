import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "src/app/admin/auth/auth.service";
import { Observable } from 'rxjs';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      state: RouterStateSnapshot): Observable<boolean>  | boolean{
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['admin/login'])
    }
    return true;
  }

}