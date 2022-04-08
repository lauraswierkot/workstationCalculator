import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import { ItemModel } from '../models/item-model';

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
    this.add(Number(this.item.price.valueOf()))};
  }

  total:number=0;

  add(price: number){
    this.total +=price;
  }

  substract(price: number){
    this.total -= price;
  }

  onDelete(item : ItemModel) {
    alert(item.id);
    this.itemsList = this.itemsList.filter((i) => i.id !== item.id); //filter i lambda expresiions (arrow function)
    this.substract(Number(item.price.valueOf()));
  }

}
