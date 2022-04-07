import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemModel } from '../models/item-model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() buttonClicked : EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  item: string = "";
  details: string ="";
  price: number=0; 
  itemsList: ItemModel[] = [];

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.itemsList = this.itemsList.concat({
      id: Math.random(),
      item: form.form.value.item,
      details: form.form.value.details,
      category: form.form.value.category,
      price: form.form.value.price
    });
    console.log('Submitted', form.form.value);
    this.buttonClicked.emit(form.form.value);
  }

  onDelete(id: number) {
    this.itemsList = this.itemsList.filter((item) => item.id !== id);
  }


}
