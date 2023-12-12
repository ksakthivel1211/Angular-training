import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { INVALID_CREDENTIALS } from 'src/app/constants/error.constants';
import { LOGIN_IMAGE } from 'src/app/constants/img.constants';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logingin',
  templateUrl: './logingin.component.html',
  styleUrls: ['./logingin.component.css']
})
export class LoginginComponent {

  readonly loginIcon = LOGIN_IMAGE;
  readonly invalidCredentials = INVALID_CREDENTIALS;

  pageHeading = "Login into Eatz"

  @ViewChild('formValue') loginFormValue! : NgForm;

  userdata = {
    "name":"",
    "password":""
  };

  userDetailsValid = true;

  constructor(private loginService:LoginService,
              private router: Router
    ){}

  ngOnInit()
  {
    this.loginService.loginpage(true);
  }

  onSubmit()
  {
    
    this.userdata.name = this.loginFormValue.value.userData.username;
    this.userdata.password = this.loginFormValue.value.userData.password;

    this.userDetailsValid = this.loginService.login(this.userdata)
    

    if(this.userDetailsValid)
    {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy()
  {
    this.loginService.loginpage(false);
  }

}
