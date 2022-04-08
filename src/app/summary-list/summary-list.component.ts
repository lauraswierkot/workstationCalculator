import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import { ItemModel } from '../models/item-model';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnChanges {

  @Input() item : ItemModel = {} as ItemModel;

  itemsList : ItemModel[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['item'].isFirstChange()){   //Lista bedzie pusta przed pierwszym inputem
    this.itemsList.push(this.item);
    this.addPrice(Number(this.item.price.valueOf()))};
    this.addItem(this.itemsList.length)
  }

  totalPrice : number = 0;

  addPrice(price: number){
    this.totalPrice +=price;
  }
  substractPrice(price: number){
    this.totalPrice -= price;
  }

  totalItems : number = 0;

  addItem(item: number){
    this.totalItems = item;
  }
  substractItem(item: number){
    this.totalItems = item + 1;
  }

  onDelete(item : ItemModel) {
    this.itemsList = this.itemsList.filter((i) => i.id !== item.id); //filter i lambda expresiions (arrow function)
    this.substractPrice(Number(item.price.valueOf()));
    this.substractItem((this.itemsList.length) -1);
  }
}
