import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FACEBOOK_IMAGE, INSTAGRAM_IMAGE, LINKEDIN_IMAGE, TWITTER_IMAGE } from './constants/img.constants';
import { LoginService } from './services/login.service';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-2';

  headerNavBarData = {
    "heading":"eatz",
    "home":"Home",
    "restaurants":"Restaurants",
    "login":"Login",
    "logout":"Logout"
  }

  footerContext = "@ 2019 indianpix";

  readonly twitterImage = TWITTER_IMAGE;
  readonly facabookImage = FACEBOOK_IMAGE;
  readonly linkedinImage = LINKEDIN_IMAGE;
  readonly instagramImage = INSTAGRAM_IMAGE;

  constructor(private restaurantService:RestaurantService,
              private loginService: LoginService,
              private router: Router        
  ){}


  refreshRestaurants()
  {
    this.restaurantService.updateRestaurantSearch("");
  }

  logout()
  {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  isLogged()
  {
    return this.loginService.isAuthenticaed();
  }

  inLoginPage():boolean
  {
    return this.loginService.getInLogin();
  }
}
