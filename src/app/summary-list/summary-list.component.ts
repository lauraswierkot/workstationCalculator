import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import { ItemModel } from '../models/item-model';
import {AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnChanges {

  @Input() item : ItemModel = {} as ItemModel;
  @Input() categories : string[] = [];


  itemsList : ItemModel[] = [];
  spareitemsList : ItemModel[] = [];
  chosenCategory : string = '';
  totalPrice : number = 0;
  totalItem : number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['categories']);
    if(changes['item'] !== undefined && !changes['item'].isFirstChange()){   // pierwszy wygenerowanie komponentu rejestruje zmiane ale nie zostal utworzony item,przy dodaniu kat nie zostal takze zdefiniowany
    this.itemsList.push(this.item);
    this.spareitemsList = this.itemsList;
    this.countItems();
    this.countPrice();
  }}

  countItems(){
    this.totalItem = this.itemsList.length;
  }

  countPrice(){
    this.totalPrice = 0;
    for(let item of this.itemsList){
      this.totalPrice += Number(item.price.valueOf());
    }
  }

  onDelete(item : ItemModel) {
    this.itemsList = this.itemsList.filter((i) => i.id !== item.id); //filter i lambda expresiions (arrow function)
    this.countItems();
    this.countPrice();
  }
  
  filterTable(){
    if(this.chosenCategory == ""){
      this.itemsList = this.spareitemsList;
    }
    else{
      this.itemsList = this.spareitemsList.filter((j) => j.category == this.chosenCategory);
    }
    this.countItems();
    this.countPrice();
  }

 sortTable(column: string, n: number  ) {
   switch(column) {
     case 'title': 
     {
      this.itemsList = this.itemsList.sort((a,b) => 
      {
        if (a.item > b.item){
          return 1 * n;
        }
        if (a.item < b.item){
          return -1 * n;
        }
        return 0;
      });
      break;
     }
     case 'details': {
      this.itemsList = this.itemsList.sort((a,b) => {
        if (a.details > b.details){
          return 1 * n;
        }
        if (a.details < b.details){
          return -1 * n;
        }
        return 0;
      });
      break;
    }
     case 'category': {
        this.itemsList = this.itemsList.sort((a,b) => {
          if (a.category > b.category){
            return 1 * n;
          }
          if (a.category < b.category){
            return -1 * n;
          }
          return 0;
        });
        break;
      }
      case 'price': {
        this.itemsList = this.itemsList.sort((a,b) => {
          if (a.price > b.price){
            return 1 * n;
          }
          if (a.price < b.price){
            return -1 * n;
          }
          return 0;
        });
        break;
      }
     default: {
       break;
     }
   }

 }
  

}
