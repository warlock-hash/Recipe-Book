import { RecipeModel } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
  singleRecipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A Test Recipe',
      'This is Test Recipe Discription',
      'https://recipesaresimple.com/' +
        'wp-content/uploads/2015/04/' +
        'roasted-black-pepper-chicken-recipe-300x300.jpg',
      [new IngredientModel('Meat', 1), new IngredientModel('Fries', 20)]
    ),
    new RecipeModel(
      'Another Test Recipe',
      'This is Test Recipe Discription',
      'https://recipesaresimple.com/wp-content/' +
        'uploads/2015/02/wester-chicken-chops-wit' +
        'h-mushroom-sauce-recipe-300x300.jpg',
      [
        new IngredientModel('Chicken', 1),
        new IngredientModel('Boneless Meat', 2),
      ]
    ),
  ];

  constructor(private ShopListServices: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ShopListServices.addMultipleIngredient(ingredients);
  }
}
