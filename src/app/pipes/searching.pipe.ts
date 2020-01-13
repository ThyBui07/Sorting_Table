import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {
  transform(values: any[],option: string): any {
    if(!values)return null;
    if(!option)return values;

    return values.filter(value => {
      return JSON.stringify(value).toLowerCase().includes(option);
      });
  }
}
