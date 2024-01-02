import { Injectable } from '@angular/core';

type userData = {
  email:string,
  password:string,
  username:string,
  boughtCourses:string[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedStatus = false;

  userName ="";

  userSignedUpData:userData[]=[
    {
      email:"sa@gmail.com",
      password:"Sakthi11!",
      username:"sakthivel",
      boughtCourses:[]
    }
];

currentUser:userData = {
  email:"",
  password:"",
  username:"",
  boughtCourses:[]
};

  constructor() { }

  getLoginStatus()
  {
    return this.loggedStatus;     
  }

  authenticateUser(email:string,password:string)
  {
    const userPresent = this.userSignedUpData.filter((data)=>{
      return data.email == email && data.password == password;
    });
    
    if(userPresent.length>0)
    {
      this.loggedStatus = true;
      this.currentUser.username = userPresent[0].username;
      this.currentUser.email = userPresent[0].email;
      this.currentUser.password = userPresent[0].password;
      this.currentUser.boughtCourses = userPresent[0].boughtCourses;
      localStorage.setItem('userLoginData',JSON.stringify(this.currentUser.email));
      return true;
    }
    else{
      return false;
    }
  }

  autoLogin()
  {
    let userData = JSON.parse(localStorage.getItem('userLoginData') || '{}');
    if(!userData)
    {
      return;
    }
    else
    {
      if(this.userSignedUpData.find((user)=> user.email == userData))
      {
        this.loggedStatus = true;
      }
      return;
    }
  }

  logout()
  {
    this.loggedStatus = false;
    localStorage.removeItem('userLoginData');
  }


}
