import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onSaveIngredient() {
    let ingredient: IngredientModel = new IngredientModel(
      this.name.nativeElement.value,
      this.amount.nativeElement.value
    );
    this.shoppingListService.addIngredients(ingredient);
  }

  onClearField() {
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
