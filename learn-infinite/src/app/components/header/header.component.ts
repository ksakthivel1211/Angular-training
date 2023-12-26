import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CART_IMAGE, PROFILE_ICON } from 'src/app/constants/image-constants';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  readonly cartImage = CART_IMAGE;
  
  themeColor!:string;

  cartNumber = 0;

  clasname = "search-box"

  loggdIn = false;

  welcomeMessageLogout = "Welcome to learning"
  welcomeMessageLogin = "Welcome back, "

  userName = "";

  constructor(private authenticationService:AuthenticationService,
              private dataService:DataService,
              private router:Router,
              private titlePipe:TitleCasePipe
    ){}

  ngOnInit()
  {
    this.dataService.getThemeColor().subscribe((data)=> this.themeColor = data);  
    this.dataService.getCartCount().subscribe((data)=>{
      this.cartNumber = this.cartNumber + data;
    })
    this.userName = this.getUsername();
  }

  getLoggedStatus()
  {
    return this.authenticationService.getLoginStatus()
  }

  getUsername()
  {
    return this.titlePipe.transform(this.authenticationService.getUserName());
  }

  cartOnClick()
  {
    this.router.navigate(['/my-courses']);
  }
}
