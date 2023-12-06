import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  restaurantData:any;
  restaurantArray: any;

  constructor(private dataService:DataService){}

  ngOnInit()
  {
      this.dataService.getData().subscribe((data)=>{
        this.restaurantData = data;
        this.restaurantArray = this.restaurantData.Restaurants;
      })
  }

}
