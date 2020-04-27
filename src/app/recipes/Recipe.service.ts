import { RecipeModel } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  singleRecipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A Test Recipe',
      'This is Test Recipe Discription',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
    ),
    new RecipeModel(
      'Another Test Recipe',
      'This is Test Recipe Discription',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
