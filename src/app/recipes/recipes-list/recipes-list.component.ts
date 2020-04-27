import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: RecipeModel[] = [
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

  clickedRecipe: RecipeModel;
  @Output('single-Recipe') event = new EventEmitter<RecipeModel>();

  constructor() {}

  ngOnInit(): void {}

  onSingleRecipeSelected(recipeReceived: RecipeModel) {
    this.clickedRecipe = recipeReceived;
    this.event.emit(this.clickedRecipe);
  }
}
