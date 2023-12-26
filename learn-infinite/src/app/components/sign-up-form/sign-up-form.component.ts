import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INVALID_CREDENTIALS, INVALID_EMAIL, INVALID_PASSWORD } from 'src/app/constants/error-constants';
import { SEARCH_ICON } from 'src/app/constants/image-constants';
import { PASSWORD_REGEX } from 'src/app/constants/regex';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

type userData = {
  email:string,
  password:string,
  username?:string
}

type completeUserData = {
  email:string,
  password:string,
  username:string,
  boughtCourses:string[]
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

  userData!:completeUserData;

  userLoginResponse = {
    email:"",
    password:""
  }

  signupText ={
    text:"Don't have an account ?",
    link:'Register here'
  }

  loginText = {
    text:"Have any account ?",
    link:'Login here'
  }

  readonly searchIcon = SEARCH_ICON;
  readonly invalidEmail = INVALID_EMAIL;
  readonly invalidPassword = INVALID_PASSWORD
  readonly invalidCredentials = INVALID_CREDENTIALS;

  userDetailsValid = true;

  buttonName="Login";

  signupPage = false;

  buttonClass="login";

  formGroup = new FormGroup({
    username: new FormControl('',{nonNullable:true}),
    email: new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.email]}),
    password: new FormControl('',{nonNullable:true,validators:[Validators.required,Validators.pattern(PASSWORD_REGEX)]})
  })

  themeColor!:string;

  @Input() classname:string='';

  constructor(private authenticationService:AuthenticationService,
              private dataService: DataService,
              private router:Router
    ){}

  ngOnInit()
  {
    this.dataService.getThemeColor().subscribe((data)=> this.themeColor = data);
  }

  onSubmit()
  {
    console.log(this.formGroup);
    
      if(this.signupPage)
      {
        this.userData={
          email:this.formGroup.controls.email.value,
          password:this.formGroup.controls.password.value,
          username:this.formGroup.controls.username.value,
          boughtCourses:[]
        }
        this.authenticationService.addToUserdata(this.userData);
        this.userDetailsValid=true;
        this.signupPage = false;
      }
      
      else{
        this.userLoginResponse={
          email:this.formGroup.controls.email.value,
          password:this.formGroup.controls.password.value,
        }
        this.authenticateUserData(this.userLoginResponse);
      }
    this.formGroup.reset();
    
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
    this.formGroup.reset();
    this.userDetailsValid=true;
  }

  getButtonName()
  {
    if(!this.signupPage)
    {
      this.formGroup.controls['username'].clearValidators();
      return "Login";
    }
    else{
      this.formGroup.controls['username'].setValidators([Validators.required]);
      return "Register";
    }
  }

}
