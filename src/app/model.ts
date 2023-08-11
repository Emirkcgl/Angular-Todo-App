import { todoItem } from './todoitem';

export class Model {
  name: string;
  items: todoItem[];

  constructor() {
    this.name = '';
    this.items = [
      { description: 'kahvaltı', action: true },
      { description: 'Spor', action: true },
      { description: 'Alışveriş', action: false },
    ];
  }
}
