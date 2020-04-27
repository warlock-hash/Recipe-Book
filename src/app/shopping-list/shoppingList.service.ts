import { IngredientModel } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 10),
    new IngredientModel('Banana', 15),
    new IngredientModel('Avocado', 5),
    new IngredientModel('Pine Apple', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addMultipleIngredient(newMultipleIngredient: IngredientModel[]) {
    this.ingredients.push(...newMultipleIngredient);
  }
}
