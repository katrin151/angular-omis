import { Injectable } from '@angular/core';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];i;

  constructor(private itemService: ItemService,) {}

  addItem(item: any) :void {
    console.log(this.cartItems+"addItem");
   this.cartItems.push(item);
  }

 

}
