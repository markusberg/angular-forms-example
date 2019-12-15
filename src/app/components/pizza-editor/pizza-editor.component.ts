import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pizza-editor',
  templateUrl: './pizza-editor.component.html',
  styleUrls: ['./pizza-editor.component.scss'],
})
export class PizzaEditorComponent implements OnInit {
  @Input() selectedPizzaGroup: AbstractControl;
  @Output() addPizza = new EventEmitter();

  faPlusCircle = faPlusCircle;

  get toppingsArray(): FormArray {
    if (!this.selectedPizzaGroup) return;

    return this.selectedPizzaGroup.get('toppings') as FormArray;
  }

  constructor() {}

  ngOnInit() {}
}
