import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private loginService:AuthenticationService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if(this.loginService.getLoginStatus())
    {
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }

    return this.loginService.getLoginStatus();
  }
}
