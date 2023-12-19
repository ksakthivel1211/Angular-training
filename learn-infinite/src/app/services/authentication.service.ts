import { Injectable } from '@angular/core';

type userData = {
  email:string,
  password:string,
  username?:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedStatus = false;

  userName? ="";

  userSignedUpData:userData[]=[
    {
      email:"sa@gmail.com",
      password:"abc",
      username:"sakthivel"
    }
];

  constructor() { }

  getLoginStatus()
  {
    return this.loggedStatus;
  }

  getUserName()
  {
    return this.userName;
  }

  addToUserdata(value:userData)
  {
    this.userSignedUpData.push(value);
  }

  authenticateUser(email:string,password:string)
  {
    const userPresent = this.userSignedUpData.filter((data)=>{
      return data.email == email && data.password == password;
    });

    if(userPresent.length>0)
    {
      this.loggedStatus = true;
      this.userName = userPresent[0].username;
      return true;
    }
    else{
      return false;
    }
  }

  logout()
  {
    this.loggedStatus = false;
  }


}
