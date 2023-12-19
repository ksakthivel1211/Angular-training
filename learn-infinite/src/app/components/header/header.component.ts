import { Component } from '@angular/core';
import { CART_IMAGE, PROFILE_ICON } from 'src/app/constants/image-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  readonly cartImage = CART_IMAGE;

  clasname = "search-box"

  loggdIn = false;

  welcomeMessageLogout = "Welcome to learning"
  welcomeMessageLogin = "Welcome back , "

  userName = "";

  constructor(private authenticationService:AuthenticationService){}

  getLoggedStatus()
  {
    return this.authenticationService.getLoginStatus()
  }

  getUsername()
  {
    return this.authenticationService.getUserName();
  }
}
