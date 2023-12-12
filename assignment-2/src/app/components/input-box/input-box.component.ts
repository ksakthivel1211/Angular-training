import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {

  value!:string;

  advancedSearchFields = {
    "date":"Date",
    "time":"Time",
    "customerCount":"Guests"
  }

  maxCustomerBooking = [1,2,3,4];

  @Output() restaurantName = new EventEmitter<string>();

  @Input() inputPage! :string;

  buttonText = "GO";

  constructor(private restaurantService:RestaurantService,
              private router:Router
    ){}


  onSubmit(form:NgForm)
  {

    if(this.inputPage!=="restaurant")
    {
      this.restaurantService.updateRestaurantSearch(form.value.restaurantName);
      this.router.navigate(['/restaurants']);
    }
    else{
    this.value = form.value.restaurantName;
    this.restaurantName.emit(form.value.restaurantName);
    }


  }

}
