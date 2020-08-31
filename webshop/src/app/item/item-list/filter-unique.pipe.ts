import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {

  transform(value ) {
    console.log(value);
    let uniqueArray = value.filter(function (el, index, array) { 

      //console.log((array.map(arrayEl =>arrayEl.category)).indexOf ("Earbuds"));
      //console.log(array.map(arrayEl =>arrayEl.category));
      //console.log(index);
      //console.log(el);
      return (array.map(arrayEl =>arrayEl.category)).indexOf (el.category) == index;
    });

    return uniqueArray;
  }

}
