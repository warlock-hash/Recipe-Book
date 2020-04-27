import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: RecipeModel;
  @Output('clicked-Recipe') clickedRecipeEvent = new EventEmitter<
    RecipeModel
  >();

  constructor() {}

  ngOnInit(): void {}

  onClickRecipe() {
    this.clickedRecipeEvent.emit(this.recipe);
  }
}
