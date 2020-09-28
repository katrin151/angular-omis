import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  id;item;

  constructor(private route: ActivatedRoute,
               private itemService: ItemService) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params)=>{
      // let id = params["itemId"];
      console.log(this.id + "cartc");
    //this.item = this.itemService.getItem(this.id);
     }

  

}
