import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixSufix'
})
export class PrefixSufixPipe implements PipeTransform {

  transform(value:any, args: string) {

    if(args=='dollar')
    {
      return '$'+value;
    }
    else if(args=='exclamation-nxt')
    {
      return value+'!';
    }
    else if(args=='exclamation-pre')
    {
      return '!'+value;
    }
    return value;
  }

}
