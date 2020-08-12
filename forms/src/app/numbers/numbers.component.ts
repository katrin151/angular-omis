import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  numbers = [21,22,23,24,25,26,27]
  
    // massivid on koos kandiliste sulgudega
   //objektid on koos parameetritega"

   //objektid = [{nimi: "karl" , vanus: "35"}, {nimi = "pille", vanus: ""}]
  
   constructor() { }

  ngOnInit(): void {
  }
  onGenerate() { 
    this.numbers.push(Math.floor(Math.random() * 99) + 1  );
  
  }
}
