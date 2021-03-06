import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemModel } from '../models/item-model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() buttonClicked : EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
  @Output() categoryAdded : EventEmitter<string[]> = new EventEmitter<string[]>();
  
  item: string = "";
  details: string ="";
  price: number=0;  
  category: string = "";

  categories : string[] =  ['podzespoły komputera', 'urządzenia peryferyjne', 'oprogramowanie', 'inne'];

  addCategory(){
    this.categories.push(this.category);
    this.categoryAdded.emit(this.categories);
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
      let model = {} as ItemModel;
      model.category = form.form.value.category;
      model.details = form.form.value.details;
      model.id = Guid.create();
      model.item = form.form.value.item;
      model.price = form.form.value.price;
      this.buttonClicked.emit(model);
  }

}
