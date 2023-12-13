import { Component } from '@angular/core';
import { INVALID_RESTAURANT_NAME } from 'src/app/constants/error.constants';
import { RESTAURANT_IMAGE } from 'src/app/constants/img.constants';
import { PrefixSufixPipe } from 'src/app/pipes/prefix-sufix.pipe';
import { DataService } from 'src/app/services/data.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

type restaurant = { 
  "restaurantName": string,
  "address": string, 
  "foodCatogories": string[], 
  "rating": number, 
  "deliveryTime": number, 
  "price": number 
}

type card= {
  "name":string
  "img":string
  "leftContainer":any[],
  "rightContainer":any[],
  "bottomContainer":string
}

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  readonly restaurantImage = RESTAURANT_IMAGE;
  readonly invalidRestaurantResponse = INVALID_RESTAURANT_NAME;

  prefixSufixPipe = new PrefixSufixPipe();

  pageHeading = "Restaurants";

  cardValues:card[]=[];

  restaurantData:restaurant[]=[];

  filteredRestaurantArray:restaurant[]=[];

  displayingRestaurants:any=[];

  searchedRestaurant!:string;

  searchedRestaurantValid = true;

  constructor(private dataService:DataService,
              private restaurantService:RestaurantService,
              ){}

  ngOnInit()
  {

    this.dataService.getObData().subscribe((data:any)=>{
      this.restaurantData = data.Restaurants;
      this.displayingRestaurants = this.restaurantService.getFilteredRestaurants(this.restaurantData);
      this.updateCardData(this.displayingRestaurants);
    })

    this.searchedRestaurantValid = this.restaurantService.checkSearchedNameValid();
    
  }

  updateCardData(data:restaurant[])
  {
    this.cardValues =[];

    data.forEach((restaurant)=>{

      var card:card= {
        "name":"restaurant",
        "img":this.restaurantImage,
        "leftContainer":[],
        "rightContainer":[],
        "bottomContainer":""
      };
      
      card.leftContainer.push(restaurant.restaurantName,restaurant.address,restaurant.foodCatogories);
      card.rightContainer.push(this.prefixSufixPipe.transform(restaurant.rating,"restaurantRating"),this.prefixSufixPipe.transform(restaurant.rating,"restaurantDeliverTime"),this.prefixSufixPipe.transform(restaurant.rating,"restaurantPrice"));
      this.cardValues.push(card);
      
    })
  }

 

  updateRestaurantName(name:string)
  {
    this.restaurantService.updateRestaurantSearch(name);
    this.displayingRestaurants = this.restaurantService.getFilteredRestaurants(this.restaurantData);
    this.updateCardData(this.displayingRestaurants);
    this.searchedRestaurantValid = this.restaurantService.checkSearchedNameValid();
  }

}
