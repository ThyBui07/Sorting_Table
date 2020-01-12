import { Pipe, PipeTransform } from '@angular/core';
import { sortByKeys } from './sortByKeys';


  @Pipe({
    name: 'sorting'
  })
  export class SortingPipe implements PipeTransform {

    public transform(value: any[], ...keys: string[]): any[] {
      return sortByKeys<any>(value.slice(), ...keys);
  }

  }