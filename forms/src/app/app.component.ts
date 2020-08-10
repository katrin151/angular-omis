import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  
 //cat = {breed:"siiamikass", firstname: "garfield", picture: "www.catpicture.ee"} ;
  
  cat = {};

  cats= [
    {breed:"siiamikass", firstname: "Garfield", picture: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"},

    {breed:"La Crance", firstname: "Kiisu", picture: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/cat-410261.jpg?h=191a1c11&itok=c4ksCwxz"},
  ];

  onSubmit(contactForm){
    // väärtused
    console.log(contactForm.value);
    let cat = contactForm.value;
    console.log(cat);
    console.log(this.cats);
    this.cats.push(cat);
    console.log(this.cats);
  }

}
