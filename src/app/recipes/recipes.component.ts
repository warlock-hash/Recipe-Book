import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './Recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.singleRecipeSelected.subscribe((Recipe: RecipeModel) => {
      this.recipe = Recipe;
    });
  }
}
