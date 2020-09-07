import { Injectable } from '@angular/core';
import { Cat } from './cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

 private cats= [
    {breed:"siiamikass", firstname: "Garfield", 
    picture: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"},

    {breed:"La Crance", firstname: "Kiisu", 
    picture: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/cat-410261.jpg?h=191a1c11&itok=c4ksCwxz"},
  ];
  

  constructor() { }

  //{breed: string, firstname:string , picture: string} asemel Cat

  getCats(): Cat[] {
    return this.cats.slice();
  }

  addCat(cat: Cat) {
    this.cats.push(cat);
  }
}
