import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoppingList.service';
import { RecipeService } from '../Recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent implements OnInit {
  @Input('single-recipe') recipe: RecipeModel;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
    alert('Send to Shopping List');
  }
}
