import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  cats= [
    {breed:"siiamikass", firstname: "Garfield", picture: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"},

    {breed:"La Crance", firstname: "Kiisu", picture: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/cat-410261.jpg?h=191a1c11&itok=c4ksCwxz"},
  ];
  

  constructor() { }
}
