import { HttpClient } from '@angular/common/http';
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
export class DataService {

  foodImgs:string[]=[];

  apiData:restaurant[]=[];

  restaurantData:restaurant[]=[];

  displayingRestaurants:restaurant[]=[];

  constructor(private http: HttpClient) { }


  getObData()
  {
    return this.http.get('https://mocki.io/v1/f49fe93b-48dd-46bd-a71c-f228e572acda');
  }

  getExploreFoodData()
  {
    return this.http.get('https://mocki.io/v1/07a9cdd7-37f2-44b4-9822-4bb567729034');
  }

  getLocation(){
    return this.http.get('https://ipapi.co/json');
  }



}
