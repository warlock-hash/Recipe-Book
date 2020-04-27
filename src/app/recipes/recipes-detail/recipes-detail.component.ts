import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent implements OnInit {
  @Input('single-recipe') recipe: RecipeModel;
  constructor() {}

  ngOnInit(): void {}
}
