import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


  info = 'Your Shopping List';
  items: ShoppingItem[] = [
    { description: 'Shampoo' },
    { description: 'Beer' },
    { description: 'More beer' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(itemEl: HTMLInputElement): void {
    console.log(itemEl);
    const itemToAdd: ShoppingItem = {
      description: itemEl.value
    };
    this.items = [itemToAdd, ...this.items];
    itemEl.value = '';
    itemEl.focus();
  }
}
