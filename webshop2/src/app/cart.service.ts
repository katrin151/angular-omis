import { Injectable } from '@angular/core';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];

  constructor(private itemService: ItemService,) {}

  addItem(item: any) :void {
    console.log(this.cartItems);
    console.log("addItem");
   this.cartItems.push(item);
  }

 

}
