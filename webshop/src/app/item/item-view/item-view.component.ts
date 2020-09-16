import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart/cart.service'
import { ToastService } from 'angular-toastify';
import { Item } from '../item.model';


@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item: Item;
//{imgSrc: string, title: string, price: string, category: string}
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute, 
    private cartService: CartService,
    private _toastService: ToastService
    )  { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params)=>{
      //console.log(params);
      //console.log(params["itemId"]);
      //console.log(params.ItemId);
      //this.item["itemId"]
      //this.item.itemId;
      let id = params["itemId"];
      //this.item = this.itemService.items[id];
      this.item = this.itemService.getItem(id);

    }); 
    
   // this.item = this.itemService.items[0];
    
  }
   onAddtoCart():void {
     console.log("abc");
     this.cartService.addItem(this.item);
     this._toastService.success('Edukalt ostukorvi lisatud');
   }

}
