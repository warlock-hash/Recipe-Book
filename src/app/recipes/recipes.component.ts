import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipe: RecipeModel;

  constructor() {}

  ngOnInit(): void {}

  onSingleRecipeClickedEvent(recivedRecipe: RecipeModel) {
    this.recipe = recivedRecipe;
  }
}
