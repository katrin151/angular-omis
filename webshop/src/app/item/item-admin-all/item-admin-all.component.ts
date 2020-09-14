import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-admin-all',
  templateUrl: './item-admin-all.component.html',
  styleUrls: ['./item-admin-all.component.css']
})
export class ItemAdminAllComponent implements OnInit {
   items: Item[];
   
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.items;
  }

}
