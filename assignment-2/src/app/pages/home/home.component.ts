import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCATION_ICON, LOGIN_IMAGE } from 'src/app/constants/img.constants';
import { DataService } from 'src/app/services/data.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

type advancedSearchInputs = {
  "date":Date,
  "time":Date,
  "guestCount":number
}

type exploreFood = {
  "img":string,
  "foodName":string,
  "foodRate":string,
  "foodDescription":string
}

type card= {
  "name":string
  "img":string
  "leftContainer":any[],
  "rightContainer":any[],
  "bottomContainer":string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  readonly locationIcon = LOCATION_ICON;
  readonly loginImage = LOGIN_IMAGE;

  @ViewChild('formData') advancedSearchFormValue! : NgForm;

  pageContent ={
    "pageHeadingline1":"Food",
    "pageHeadingline2":"Discover restaurant and delicious food",
    "advancedSearchHeading":"advanced booking",
    "exploreFoodsHeading":"Explore our foods",
    "exploreFoodsDescription":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ad deleniti deserunt laboriosam reprehenderit nemo tempora itaque vitae et amet, porro perferendis labore adipisci rem dolore placeat? Alias, libero autem."
  }



  maxCustomerBooking = [1,2,3,4];

  restaurantName!:string;

  advancedSearchInputs!:advancedSearchInputs;

  currentLocation ="";

  foodImgs:string[]=[];

  exploreFoodData:card[]=[];

  constructor(
              private dataService:DataService,
              private restaurantService:RestaurantService,
              private router: Router
              )
              {}

  ngOnInit()
  {
    this.getCurrentLocation();
    this.dataService.getExploreFoodData().subscribe((data:any)=>{
      this.updateCardData(data.exploreFoods);
    })
  }

  getCurrentLocation()
  {
    this.dataService.getLocation().subscribe((data:any)=>{
      this.currentLocation = data.city;
    })
    
  }

  updateCardData(data:exploreFood[])
  {

    data.forEach((food)=>{

      var card:card= {
        "name":"exploreFood",
        "img":"",
        "leftContainer":[],
        "rightContainer":[],
        "bottomContainer":""
      };
      card.img = food.img;
      card.leftContainer.push(food.foodName);
      card.rightContainer.push(food.foodRate);
      card.bottomContainer = food.foodDescription;

      this.exploreFoodData.push(card);
      
    });
  }
}
