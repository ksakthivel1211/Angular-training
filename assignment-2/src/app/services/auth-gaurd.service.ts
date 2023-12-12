import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGaurdService {

  constructor(private loginService:LoginService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if(this.loginService.isAuthenticaed())
    {
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }

    return this.loginService.isAuthenticaed();
  }
}
