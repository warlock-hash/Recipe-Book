import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @Output('ingredient') outputIngredient = new EventEmitter<IngredientModel>();
  ingredient: IngredientModel;

  constructor() {}

  ngOnInit(): void {}

  onSaveIngredient() {
    this.ingredient = new IngredientModel(
      this.name.nativeElement.value,
      this.amount.nativeElement.value
    );
    this.outputIngredient.emit(this.ingredient);
  }

  onClearField() {
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
