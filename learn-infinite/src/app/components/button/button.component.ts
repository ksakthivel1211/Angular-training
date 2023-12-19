import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {



  @Input() buttonPage:string="";

  @Input() buttonValue:string = "Login";

  constructor(private router:Router,
              private authenticationService:AuthenticationService
    ){}

  onClick()
  {
    if(this.buttonValue=="Login"){
      this.router.navigate(['/login'])
    }
    else if(this.buttonValue=="Logout")
    {
      this.authenticationService.logout();
    }

  }
}
