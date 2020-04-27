import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isRecipes_Shopping: string = null;
  @Output('rec-or-shop') eventEmit = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  onRecipesClick() {
    this.isRecipes_Shopping = 'rec';
    this.eventEmit.emit(this.isRecipes_Shopping);
  }
  onShoppingClick() {
    this.isRecipes_Shopping = 'shop';
    this.eventEmit.emit(this.isRecipes_Shopping);
  }
}
