import { Injectable } from '@angular/core';

type restaurant = { 
  "restaurantName": string,
  "address": string, 
  "foodCatogories": string[], 
  "rating": number, 
  "deliveryTime": number, 
  "price": number 
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantName:string="";

  displayingRestaurants:restaurant[]=[];

  searchValid = true;

  constructor() { }

  getRestaurantName():string
  {
    return this.restaurantName;
  }

  updateRestaurantSearch(searchedName:string)
  {
    this.restaurantName = searchedName;
  }

  getRestaurantData(restaurantInput:restaurant[]){
      
    if(this.restaurantName!=="")
    {
       this.displayingRestaurants = restaurantInput.filter((restaurant) =>{
      
        return restaurant.restaurantName === this.restaurantName;
        
      });

      return this.displayingRestaurants
      
    }

    else{
      this.displayingRestaurants = restaurantInput
      return this.displayingRestaurants
    }

  }

  getFilteredRestaurants(res:restaurant[])
  {
    if(this.restaurantName!=="")
    {
       this.displayingRestaurants = res.filter((restaurant) =>{
      
        return restaurant.restaurantName === this.restaurantName;
        
      });
      
      if(this.displayingRestaurants.length==0)
      {
        this.searchValid = false;
        this.displayingRestaurants = res;
      }
      else{
        this.searchValid =true
      }

      return this.displayingRestaurants

    }

    else{
      return res;
    }
  }

  checkSearchedNameValid()
  {
    return this.searchValid;
  }


  
}
