import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaliseFirst'
})
export class CapitaliseFirstPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: any, limit:number): String {  
    return value = value.substring(0,limit).toUpperCase() +  value.substring(limit,value.length).toLowerCase();
  }

}
