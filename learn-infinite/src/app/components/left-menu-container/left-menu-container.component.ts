import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-left-menu-container',
  templateUrl: './left-menu-container.component.html',
  styleUrls: ['./left-menu-container.component.css']
})
export class LeftMenuContainerComponent {

  buttonMessage = "Logout";

  constructor(private authenticationService:AuthenticationService){}

  getLoggedStatus()
  {
    return this.authenticationService.getLoginStatus();
  }
}
