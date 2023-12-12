import { Component, Input } from '@angular/core';

type card= {
  "name":string
  "img":string
  "leftContainer":any[],
  "rightContainer":any[],
  "bottomContainer":string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardDetails!:card;

  restaurantButtonContext = "See More"

}
