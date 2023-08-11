import { Component } from '@angular/core';
import { todoItem } from '../todoitem';
import { Model } from '../model';
import { noop } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = false;

  constructor() {}
  model = new Model();
  message: string = '';

  getName() {
    return this.model.name;
  }

  addItem(value: string) {
    if (value && value.trim() != '') {
      this.model.items.push({ description: value, action: false });
      this.message = '';
    } else {
      alert('bilgi giriniz');
    }
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }

    return this.model.items.filter(item => !item.action);
  }
  displayCount() {
    return this.model.items.filter(i => i.action).length;
  }
  isInputEmpty(): boolean {
    return this.message.trim().length === 0;
  }

  isInputValid(): boolean {
    return /^[a-zA-ZğüşıöçĞÜŞİÖÇs]*$/.test(this.message.trim());
  }

  disabled(): boolean {
    return this.isInputEmpty() || !this.isInputValid();
  }
}
