import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixSufix'
})
export class PrefixSufixPipe implements PipeTransform {

  transform(value: any, from:string): unknown {

    if(from==="input")
    {
      return value + " people";
    }
    else if(from==="restaurantRating")
    {
      return "Rating "+value;
    }
    else if(from==="restaurantDeliverTime")
    {
      return "Delivery in "+value+" mins";
    }
    else if(from==="restaurantPrice")
    {
      return "$ "+value+" for two"
    }
    else
    {
      return value;
    }
  }

}
