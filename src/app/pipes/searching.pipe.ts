import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if(!value)return null;
    if(!input)return value;

    return value.filter(function(item){
    return JSON.stringify(item).toLowerCase().includes(input);
  });
  }

}
