import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: String): String {
    const newString=value.split("").reverse().join("");
    return newString;
  }

}
