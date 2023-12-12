import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type userdataType = {
  "name":string,
  "password":string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged:boolean=false;

  inLogin = false;

  userdata:userdataType[] = [
    {
      "name":"sakthi",
      "password":"abc123"
    },
    {
      "name":"selvam",
      "password":"abc123"
    }
  ]

  constructor(private router:Router) { }

  isAuthenticaed()
  {
    return this.logged;
  }

  login(value:userdataType):boolean
  {
    const filterValue = this.userdata.filter((data)=>{
      // console.log(data.name+" "+value.name +" "+ data.password+" "+value.password);
      
      return (data.name===value.name && data.password===value.password)
    })

    if(filterValue.length>0)
    { 
      this.logged=true;
      return true;
    }
    else
    {
      return false;
    }

  }

  logout()
  {
    this.logged=false;
  }

  getInLogin()
  {
    return this.inLogin;
  }

  loginpage(log:boolean)
  {
    this.inLogin = log;
  }
}
