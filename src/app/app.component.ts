import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  isRecipe_Shopping = '';

  constructor() {}

  onHeaderClickEvent(clickedValue){
    this.isRecipe_Shopping = clickedValue;
  }
}
