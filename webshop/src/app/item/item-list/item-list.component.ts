import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  itemsShown: Item[];
  selectedCategory="all";


//{imgSrc: string, title: string, price: string, category: string}
  constructor(private itemService: ItemService) { }

  ngOnInit(): void { 
    this.items = this.itemService.getItems();
    this.itemsShown = this.items;
    
  }

  onTitleAsc() {
    this.itemsShown.sort(( item, itemNext) => item.title.localeCompare(itemNext.title))
  }

  onTitleDesc() {
    this.itemsShown.sort(( item, itemNext) => itemNext.title.localeCompare(item.title))
  }

  onPriceAsc() {
    this.itemsShown.sort(( item, itemNext) => 
    (Number)(item.price) - (Number)(itemNext.price ))
  }

  onPriceDesc() {
    this.itemsShown.sort(( item, itemNext) => 
    (Number)(itemNext.price) - (Number)(item.price ))
  }

onPriceFilter(price: number) {
  console.log(price);
  this.itemsShown = this.items.filter((item) => (Number)(item.price) < price) ;
  console.log(this.items);
}

onShowAll() {
  this.itemsShown = this.items;
}
  
}
