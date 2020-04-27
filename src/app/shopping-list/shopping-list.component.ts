import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 10),
    new IngredientModel('Banana', 15),
    new IngredientModel('Avocado', 5),
    new IngredientModel('Pine Apple', 3),
  ];

  constructor() {}

  ngOnInit(): void {}

  onNewAddedIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}
