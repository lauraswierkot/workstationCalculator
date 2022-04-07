import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnChanges {

  @Input() item : ItemModel = {} as ItemModel;

  

  ngOnChanges(changes: SimpleChanges): void {
  }



  /*onDelete(id: number) {
    this.itemsList = this.itemsList.filter((item) => item.id !== id);
  }*/

}
