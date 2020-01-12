import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {
  transform(values: any[],input: any): any {
    if(!values)return null;
    if(!input)return values;

    return values.filter(value => {
      return JSON.stringify(value).toLowerCase().includes(input);
      });
  }
}
