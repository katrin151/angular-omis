import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';
import { CartService } from './../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items;
  item;i;

  constructor(private itemService: ItemService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.items = this.itemService.getItems();
      
    }

  onAddtoCart(item) {
    
    this.cartService.addItem(this.item);
    
  }
}
