import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat.model';
import { NgForm } from '@angular/forms';
import { CatSelectService} from '../cat-select/cat-select.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  // title = 'forms';
 //cat = {breed:"siiamikass", firstname: "garfield", picture: "www.catpicture.ee"} ;
  // cat = {};

  cats: Cat [] = [];

  constructor( private catService: CatService ,
    private catSelectService: CatSelectService ) { }

  ngOnInit(): void {
    this.cats = this.catService.getCats();
  }


  onSubmit(catForm: NgForm): void {
    // väärtused
    console.log(catForm.value);
    //let cat = catForm.value;
    let cat = new Cat(
      catForm.value.breed, 
      catForm.value.firstname, 
      catForm.value.picture
      ) ;
    console.log(cat);
    console.log(this.cats);
    // this.cats.push(cat);
    this.catService.addCat(cat);
    this.cats = this.catService.getCats();
    console.log(this.cats);
  }
  onChooseCat(selectedCat: Cat): void {
    this.catSelectService.addCat(selectedCat);
  }
  
}
