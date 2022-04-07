import { Component } from '@angular/core';
import { ItemModel } from './models/item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workstationCalculator';

  passedValue : ItemModel = {} as ItemModel;

  parentEventHandlerFunction(valueEmitted: ItemModel){
  this.passedValue = valueEmitted;
}
}
