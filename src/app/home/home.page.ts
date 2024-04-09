import { Component } from '@angular/core';

@Component({
  selector: 'home.page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: { text: string, checked: boolean, editMode: boolean }[] = [];

  constructor() {}

  addItem() {
    this.items.push({ text: 'New Item', checked: false, editMode: false });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleEditMode(item: { text: string, checked: boolean, editMode: boolean }) {
    item.editMode = !item.editMode;

  }
}

