import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { INVALID_CREDENTIALS } from 'src/app/constants/error-constants';
import { SEARCH_ICON } from 'src/app/constants/image-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';

type userData = {
  email:string,
  password:string,
  username?:string
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  userData!:userData;

  readonly searchIcon = SEARCH_ICON;

  invalidCredentials = INVALID_CREDENTIALS;

  userDetailsValid = true;

  buttonName="Login";

  signupPage = false;

  buttonClass="login";

  @Input() classname:string='';

  constructor(private authenticationService:AuthenticationService,
              private router:Router
    ){}

  onSubmit(form:NgForm)
  {
    if(this.classname=="search-box")
    {
      
    }
    else if(this.classname=="login")
    {
      if(this.signupPage)
      {
        this.userData={
          email:form.value.userData.email,
          password:form.value.userData.password,
          username:form.value.userData.username
        }
        this.authenticationService.addToUserdata(this.userData);
        this.userDetailsValid=true;
        this.signupPage = false;
      }
      else{
        this.userData={
          email:form.value.userData.email,
          password:form.value.userData.password
        }
        
        this.authenticateUserData(this.userData);
      }
    }
    form.reset();
    
  }

  authenticateUserData(data:userData)
  {
    this.userDetailsValid = this.authenticationService.authenticateUser(data.email,data.password);
    if(this.userDetailsValid)
    {
      this.router.navigate(['/'])
    }
  }

  onLoginChange()
  {
    this.signupPage = !this.signupPage;
    this.userDetailsValid=true;
  }

  getButtonName()
  {
    if(!this.signupPage)
    {
      return "Login";
    }
    else{
      return "Register";
    }
  }
}
