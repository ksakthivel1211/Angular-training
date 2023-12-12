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
    else
    {
      return value;
    }
  }

}
